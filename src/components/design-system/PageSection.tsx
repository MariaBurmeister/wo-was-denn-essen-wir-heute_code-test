import { FunctionComponent, ReactNode } from "react";
import './PageSection.scss';

export const PageSection: FunctionComponent<{ title: string; headerActions?: ReactNode, children:ReactNode }> = ({ title, headerActions, children }) => {
    return (
      <section className="page_section">
        <header>
          <h2>{title}</h2>
          <div className="page_section_header_actions">
          {headerActions}
          </div>
        </header>
        {children}
      </section>
    );
  }