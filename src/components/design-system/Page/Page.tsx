import { FunctionComponent, ReactNode } from "react";
import { Title } from "../Title";
import './Page.scss';

export const Page: FunctionComponent<{
  title: string;
  children: ReactNode;
  titleAlign?: 'center' | 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'white';
}> = ({ title, children, titleAlign='center', variant='primary' }) => {

  return (
      <main id="main" className={`page ${variant}`}>
        <header className="page_header">
            <Title semanticTag="h1" highlight title={title} titleLinkTo='main' horizontalAlign={titleAlign}/>
        </header>
        <div className="page_content">
          {children}
        </div>
      </main>
  );
};