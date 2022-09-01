import { FunctionComponent, ReactNode } from "react";

export const Page: FunctionComponent<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </>
  );
};
