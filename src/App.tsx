import { createContext, lazy, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Application } from './page';
import { getBrowser } from './utils';

export const SessionContext = createContext({browser:  getBrowser()});

const Home = lazy(() => import('./page/Home'));
const BadPathPage = lazy(() => import('./page/BadPathPage'));

function App() {
  const {browser} = useContext(SessionContext);
  return (
    <SessionContext.Provider value={{browser}}>
      <Routes>
        <Route path="/" element={<Application />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="*" element={<BadPathPage />} />
        </Route>
      </Routes>
    </SessionContext.Provider>
  );
}
export default App;
