import {Routes, Route} from 'react-router-dom'


import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import {ToastContainer} from 'react-toastify'
import PrivateRoute from './components/routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css'
import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
   <>
    <ToastContainer/>
   <Routes>
   
    <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>} />
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
    <Route path='/register' element={<Register/>} />
    
    <Route path='/dashboard'
     element={
      <PrivateRoute>
      <Dashboard/>
      </PrivateRoute>
   } />
   <Route path='*' element={<NotFound/>} /> 
   </Routes>
   </>
  );
}

export default App;
