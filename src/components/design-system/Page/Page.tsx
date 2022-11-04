import { FunctionComponent, ReactNode } from "react";
import './Page.scss';
import { Title } from "../Title";

export const Page: FunctionComponent<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {


  return (
      <main id="main" className="page">
        <header className="page_header">
            <Title variant="h1" title={title} titleLinkTo='main'/>
        </header>
          {children}
      </main>
  );
};
