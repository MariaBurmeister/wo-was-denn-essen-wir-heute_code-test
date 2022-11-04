import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Application } from './page';

const Home = lazy(() => import('./page/Home'));
const BadPathPage = lazy(() => import('./page/BadPathPage'));

function App() {
  return (
      <Routes>
        <Route path="/" element={<Application />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="*" element={<BadPathPage />} />
        </Route>
      </Routes>
  );
}
export default App;
