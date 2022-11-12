import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Register from './pages/Register';
import Login  from './pages/Login';
import AddPost from './pages/AddPost';




function App() {
  
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  return (
    <div className="Wrapper">
      {drawerOpened && <Drawer onClose={()=>setDrawerOpened(false)}/>}
      <Header onClickDrawer={()=>setDrawerOpened(true)}/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/addpost" element= {<AddPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
