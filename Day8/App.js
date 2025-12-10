import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Users from './Users';
import Books from './Books';
import Invoice from './Invoice';
import Invoices from './Invoices';


function App() {
  return (
    <BrowserRouter>
    <h1>Hello World!</h1>
    <ul>
      {/* <Link to="/"><li>Home</li></Link>
      <Link to="/about"> <li>About</li></Link>
      <Link to="/contact-us"><li>Contact-us</li></Link>
      <Link to="/user/1"><li>User 1</li></Link>
      <Link to="/user/2"><li>User 2</li></Link>
      <Link to="/book/newbook"><li>new book</li></Link>
      <Link to="/book/oldbook"><li>oldbook</li></Link> */}
      <Link to="/invoices/A1"><li>A1</li></Link>
      <Link to="/invoices/A2"><li>A2</li></Link>
      <Link to="/invoices/A3"><li>A3</li></Link>

    </ul>

    <Routes>
      {/* <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact-us' element={<Contact/>}> </Route>
      <Route path='/user/:id' element={<Users/>}></Route>
    <Route path="/book">
      <Route path='newbook' element={<Books/>}></Route>
      <Route path='oldbook' element={<Books/>}></Route>
    </Route> */}
    <Route path="/invoices">
      <Route path='invoice/:id' element={ <Invoice/>}></Route>
    </Route>
    
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
