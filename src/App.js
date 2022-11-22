import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './component/menu';
import Reg from './component/reg';
import Contact from './component/contact';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
             <Route exact path="/" element={<Menu/>}></Route>
             <Route exact path="/reg" element ={<Reg/>}></Route>
             <Route exact path="/contact" element={<Contact/>}></Route> 
       
             
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
