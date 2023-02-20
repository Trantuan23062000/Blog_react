
import './App.css';
import Post from './posts'
import Headers from './header';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Indexpage from './pages/index';
import Loginpage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (



    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={

          <Indexpage />
        } />
        <Route path={'/login'} element={
          <Loginpage />
        } />
        <Route path={'/register'} element={
          <RegisterPage />
        } />
      </Route>


    </Routes>



  );
}

export default App;
