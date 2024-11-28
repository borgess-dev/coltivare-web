import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './modules/signin/pages/Login';
import AuthenticationProvider from './modules/signin/state/AuthenticationProvider';
import PrivateRoute from './modules/signin/components/PrivateRoute';
import ProtectedRoute from './modules/signin/components/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path='auth' element={<ProtectedRoute/>}>
            <Route path='signin' element={<Login/>}></Route>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="map" element={<h1 />} />
          </Route>
        </Routes>
      </AuthenticationProvider>
      
    </BrowserRouter>
  );
}

export default App;
