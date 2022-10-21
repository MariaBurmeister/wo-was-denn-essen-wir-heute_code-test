import { FunctionComponent, ReactNode} from "react";
import './PageSection.scss';
import { Title } from "./Title";

type HorizontalAlign = 'center' | 'left' | 'right';

export const PageSection: FunctionComponent<{ title: string; undertitle?: string | ReactNode; headerActions?: ReactNode; children:ReactNode; horizontalAlign?: HorizontalAlign; selfLink?: boolean}> = ({ title, undertitle, headerActions, children, horizontalAlign = 'left' , selfLink}) => {
    const sectionId = selfLink ? title.toLowerCase().replace(/ /g, '-') : undefined;

    return (
      <section id={sectionId} className={`page_section${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
        <header className={`page_section-header${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          <div className={`page_section-header-titles${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          <Title title={title} variant="h2" titleLinkTo={sectionId} />
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