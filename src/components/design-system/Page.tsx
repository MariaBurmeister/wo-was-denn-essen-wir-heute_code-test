import { FunctionComponent, ReactNode } from "react";
import './Page.scss';

export const Page: FunctionComponent<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <>
        <header className="page_header">
            <h1>{title}</h1>
        </header>
        <main className="page_content">{children}</main>
    </>
  );
};
