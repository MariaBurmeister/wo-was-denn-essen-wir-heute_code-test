import { FunctionComponent, ReactNode} from "react";
import './PageSection.scss';
import { Title } from "./Title";

type HorizontalAlign = 'center' | 'left' | 'right';

export const PageSection: FunctionComponent<{ title: string; titleHelpText?: string | ReactNode; headerActions?: ReactNode; children:ReactNode; horizontalAlign?: HorizontalAlign; selfLink?: boolean}> = ({ title, titleHelpText, headerActions, children, horizontalAlign = 'left' , selfLink}) => {
    const sectionId = selfLink ? title.toLowerCase().replace(/ /g, '-') : undefined;

    return (
      <section id={sectionId} className={`page_section${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
        <header className={`page_section-header${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          <Title title={title} variant="h2" titleLinkTo={sectionId} titleHelpText={titleHelpText} horizontalAlign={horizontalAlign}/>
          <div className={`page_section-header-actions${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          {headerActions}
          </div>
        </header>
        {children}
      </section>
    );
  }