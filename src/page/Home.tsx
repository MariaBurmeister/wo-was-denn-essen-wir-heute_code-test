import { LunchDecisionAssistent } from "../components";
import { Page } from "../components/design-system";

export const Home = () => {
  return (
      <Page title="Wo/was denn essen wir heute?">
        <LunchDecisionAssistent />
      </Page>
  );
}