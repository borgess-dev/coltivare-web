import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './modules/signin/pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth'>
          <Route path='signin' element={<Login/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
