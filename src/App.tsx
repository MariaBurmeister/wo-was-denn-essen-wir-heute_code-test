import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Application, BadPathPage, Home } from './page';





function App() {
  return (
      <Routes>
        <Route path="/" element={<Application />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="*" element={<BadPathPage />} />
        </Route>
      </Routes>
  );
}
export default App;
