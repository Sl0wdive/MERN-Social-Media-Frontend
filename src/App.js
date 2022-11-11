import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Register from './pages/Register';
import Login  from './pages/Login';





function App() {
  
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  return (
    <div className="Wrapper">
      {drawerOpened ? <Drawer onClose={()=>setDrawerOpened(false)}/> : null}
      <Header onClickDrawer={()=>setDrawerOpened(true)}/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/login" element= {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
