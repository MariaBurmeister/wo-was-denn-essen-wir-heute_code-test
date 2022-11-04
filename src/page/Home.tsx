import { LunchDecisionAssistent } from "../components";
import { Page } from "../components/design-system";

const Home = () => {
  return (
      <Page title="Wo/was denn essen wir heute?">
        <LunchDecisionAssistent />
      </Page>
  );
}

export default Home;