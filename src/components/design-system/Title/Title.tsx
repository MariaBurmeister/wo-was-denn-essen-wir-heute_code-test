import { FunctionComponent, ReactNode } from "react";
import { Skeleton } from "../Skeleton";
import './Title.scss';

export type TitleTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HorizontalAlign = 'center' | 'left' | 'right';

type SectionId = string;
type TitleLink = SectionId | 'self' ;

interface TitleProps { 
  title: string; 
  semanticTag: TitleTag; 
  highlight?: boolean;
  titleLinkTo?: TitleLink; 
  titleHelpText?: string | ReactNode; 
  horizontalAlign?: HorizontalAlign;
}

export const Title: FunctionComponent<TitleProps> = ({ title, semanticTag, highlight, titleLinkTo, titleHelpText, horizontalAlign = 'left' }) => {
  const linkToSelf = titleLinkTo === 'self';
  const hash = linkToSelf ? title.toLowerCase().replace(/ /g, '-') : titleLinkTo;

  return (
    <>
      {hash ? 
      <div className={`title ${horizontalAlign}`}>
        <a className={`self-link ${horizontalAlign}`} aria-label={`Link to current section`} href={`#${hash}`}>
          {TitleMap[semanticTag]({children:title, id:linkToSelf ? hash : undefined, highlight})} <span className={`hash ${semanticTag}`} aria-hidden>#</span>
        </a> 
        {titleHelpText && <aside className="help-text">{titleHelpText}</aside>}
      </div> :
      <div className={`title ${horizontalAlign}`}>
        {TitleMap[semanticTag]({children:title, highlight})}
        <>{titleHelpText && <aside className="help-text">{titleHelpText}</aside>}</>
      </div>
      }
    </>
  );
};


const TitleMap: Record<TitleTag, FunctionComponent<{children: ReactNode, id?: string, highlight?: boolean}>> = { 
  h1: ({children, id, highlight}) => <h1 className={`${highlight ? 'highlight' : ''}`} id={id}>{children}</h1>,
  h2: ({children, id}) => <h2 id={id}>{children}</h2>,
  h3: ({children, id}) => <h3 id={id}>{children}</h3>,
  h4: ({children, id}) => <h4 id={id}>{children}</h4>,
  h5: ({children, id}) => <h5 id={id}>{children}</h5>,
  h6: ({children, id}) => <h6 id={id}>{children}</h6>,
};

interface TitleLoaderProps { 
  semanticTag: TitleTag; 
  titleWidth?: number; 
  withHelpText?: boolean;
  helpTextWidth?: number; 
  horizontalAlign?: HorizontalAlign;
}

export const TitleLoader: FunctionComponent<TitleLoaderProps> = ({semanticTag, titleWidth, withHelpText, helpTextWidth, horizontalAlign = 'left' }) => {

  return (
      <div className={`title ${horizontalAlign}`}>
        <Skeleton skeletonFor={semanticTag} width={titleWidth}/>
        {withHelpText && <Skeleton skeletonFor="help-text" width={helpTextWidth}/>}
      </div>
  );
};