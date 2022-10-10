import { FunctionComponent, ReactNode} from "react";
import './PageSection.scss';

type HorizontalAlign = 'center' | 'left' | 'right';

export const PageSection: FunctionComponent<{ title: string; undertitle?: string | ReactNode; headerActions?: ReactNode; children:ReactNode; xAlign?: HorizontalAlign}> = ({ title, undertitle, headerActions, children, xAlign = 'left' }) => {

    return (
      <section id={title.toLowerCase()} className={`page_section${xAlign ? ' ' + xAlign : ''}`}>
        <header className={`page_section-header${xAlign ? ' ' + xAlign : ''}`}>
          <div className={`page_section-header-titles${xAlign ? ' ' + xAlign : ''}`}>
          <h2>{title}</h2>
          {undertitle && <aside>{undertitle}</aside>}
          </div>
          <div className="page_section-header-actions">
          {headerActions}
          </div>
        </header>
        {children}
      </section>
    );
  }