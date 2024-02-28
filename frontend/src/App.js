import './App.css';
import Header from './Components/UIC/Header';
import Home from './Components/Pages/Home';
import AddExpierence from './Components/Pages/AddExpierence';
import ExpierenceDetails from './Components/Pages/ExpierenceDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/addexpierence',
    element: <AddExpierence/>
  },
  {
    path: '/expierencedetails/:id',
    element: <ExpierenceDetails/>
  },
])


function App() {
  return (
    <div >
      <Header />
      <RouterProvider router = {router}></RouterProvider>
      
      
    </div>
  );
}

export default App;
