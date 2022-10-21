import { FunctionComponent, ReactNode } from "react";
import './Title.scss';

type TitleTag = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SectionId = string;
type TitleLink = SectionId | 'self' ;

const TitleMap: Record<TitleTag, FunctionComponent<{children: ReactNode, id?: string}>> = { 
  h1: ({children, id}) => <h1 id={id}>{children}</h1>,
  h2: ({children, id}) => <h2 id={id}>{children}</h2>,
  h3: ({children, id}) => <h3 id={id}>{children}</h3>,
  h4: ({children, id}) => <h4 id={id}>{children}</h4>,
  h5: ({children, id}) => <h5 id={id}>{children}</h5>,
  h6: ({children, id}) => <h6 id={id}>{children}</h6>,
};


export const Title: FunctionComponent<{ title: string; variant: TitleTag; titleLinkTo?: TitleLink; }> = ({ title, variant, titleLinkTo }) => {
  const linkToSelf = titleLinkTo === 'self';
  const hash = linkToSelf ? title.toLowerCase().replace(/ /g, '-') : titleLinkTo;

  return (
    <>
      {hash ? 
        <a className={`self-link ${variant}`} href={`#${hash}`}>
        {TitleMap[variant]({children:title, id:linkToSelf ? hash : undefined})} <span className={`hash ${variant}`} aria-hidden>#</span> <span className="sr-only">Self-link</span>
        </a> : 
        TitleMap[variant]({children:title})}
    </>
  );
};