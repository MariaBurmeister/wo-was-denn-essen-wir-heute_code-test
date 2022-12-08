import { FunctionComponent, ReactNode} from "react";
import './PageSection.scss';
import { Title } from "./Title";

type HorizontalAlign = 'center' | 'left' | 'right';
type ColorVariant = 'primary' | 'secondary' | 'white';

export const PageSection: FunctionComponent<{ title: string; titleHelpText?: string | ReactNode; headerActions?: ReactNode; children:ReactNode; horizontalAlign?: HorizontalAlign; selfLink?: boolean, variant?: ColorVariant;}> = ({ title, titleHelpText, headerActions, children, horizontalAlign = 'left' , selfLink, variant='white'}) => {
    const sectionId = selfLink ? title.toLowerCase().replace(/ /g, '-') : undefined;

    return (
      <section id={sectionId} className={`page_section${horizontalAlign ? ' ' + horizontalAlign : ''} ${variant}`}>
        <header className={`page_section-header${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          <Title title={title} semanticTag="h2" titleLinkTo={sectionId} titleHelpText={titleHelpText} horizontalAlign={horizontalAlign}/>
          <div className={`page_section-header-actions${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
          {headerActions}
          </div>
        </header>
        <div className={`page_section-content${horizontalAlign ? ' ' + horizontalAlign : ''}`}>
        {children}
        </div>
      </section>
    );
  }