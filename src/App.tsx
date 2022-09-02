import './App.scss';
import { LunchDecisionAssistent } from './components';
import { Page } from './components/layout';

function App() {
  return (
    <Page title="Wo/was denn essen wir heute?">
      <LunchDecisionAssistent />
    </Page>
  );
}
export default App;
