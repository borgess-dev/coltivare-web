import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './modules/signin/pages/Login';
import { Map } from './modules/map/pages/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="signin" element={<Login />}></Route>
        </Route>
        <Route path="map" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
