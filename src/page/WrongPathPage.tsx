import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { WrongPath } from "../assets/illustrations";
import { Page, PageSection } from "../components/design-system";

export const WrongPathPage: FunctionComponent = () => {
    const route = useLocation();
    return (
        <Page title='Inexistent Page'>
            <PageSection title="Oops!" undertitle="Seems like you took the wrong turn:" xAlign="center" >
                <WrongPath/>
                <p><i>The page <strong><code>{route.pathname}</code></strong> does not exist.</i></p>
            </PageSection>
        </Page>
    );
}