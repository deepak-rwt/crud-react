import React from 'react';
import  {BrowserRouter , Routes, Route} from 'react-router-dom';

import Home from './component/Home';
import Nav from './component/Nav';
import About from './component/About';
import Service from './component/Service';
import CreateUser from './component/CreateUser';
import Update from './component/Update';
import Read from './component/Read';


 
function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/service" element={<Service/>}/>
     <Route path="/createUser" element={<CreateUser/>}/>
     <Route path="/update/:id" element={<Update/>}/>
     <Route path="/read/:id" element={<Read/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
