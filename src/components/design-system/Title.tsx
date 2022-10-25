import { FunctionComponent, ReactNode } from "react";
import './Title.scss';

export type TitleTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HorizontalAlign = 'center' | 'left' | 'right';

type SectionId = string;
type TitleLink = SectionId | 'self' ;

interface TitleProps { 
  title: string; 
  variant: TitleTag; 
  titleLinkTo?: TitleLink; 
  undertitle?: string | ReactNode; 
  horizontalAlign?: HorizontalAlign;
}

export const Title: FunctionComponent<TitleProps> = ({ title, variant, titleLinkTo, undertitle, horizontalAlign = 'left' }) => {
  const linkToSelf = titleLinkTo === 'self';
  const hash = linkToSelf ? title.toLowerCase().replace(/ /g, '-') : titleLinkTo;

  return (
    <>
      {hash ? 

      <div className={`title${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
        <a className={`self-link${horizontalAlign ? ' ' + horizontalAlign : ''}`} aria-label={`Link to current section`} href={`#${hash}`}>
          {TitleMap[variant]({children:title, id:linkToSelf ? hash : undefined})} <span className={`hash ${variant}`} aria-hidden>#</span>
        </a> 
        {undertitle && <aside>{undertitle}</aside>}
      </div> :
      <div className={`title${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
        {TitleMap[variant]({children:title})}
        <>{undertitle && <aside>{undertitle}</aside>}</>
      </div>
      }
    </>
  );
};


const TitleMap: Record<TitleTag, FunctionComponent<{children: ReactNode, id?: string}>> = { 
  h1: ({children, id}) => <h1 id={id}>{children}</h1>,
  h2: ({children, id}) => <h2 id={id}>{children}</h2>,
  h3: ({children, id}) => <h3 id={id}>{children}</h3>,
  h4: ({children, id}) => <h4 id={id}>{children}</h4>,
  h5: ({children, id}) => <h5 id={id}>{children}</h5>,
  h6: ({children, id}) => <h6 id={id}>{children}</h6>,
};