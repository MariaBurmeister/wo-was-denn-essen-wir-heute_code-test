import './App.css';
import { LunchDecisionAssistent } from './components';
import { Page } from './components/layout';

function App() {
  return (
    <Page title="Was/wo denn essen wir heute?">
      <LunchDecisionAssistent />
    </Page>
  );
}

export default App;
