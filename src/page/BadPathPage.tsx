import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { Page, PageSection } from "../components/design-system";
import { Illustration } from "../components/design-system";



const BadPathPage: FunctionComponent = () => {
    const route = useLocation();
    return (
        <Page title='Inexistent Page'>
            <PageSection title="Oops!" titleHelpText="Seems like you took a wrong turn:" horizontalAlign="center" >
                <Illustration 
                img='bad-path'
                subtitle={<>The page <strong><code>{route.pathname}</code></strong> does not exist.</>}
                />
            </PageSection>
        </Page>
    );
}

export default BadPathPage;