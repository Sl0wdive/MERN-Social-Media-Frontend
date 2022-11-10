import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';





function App() {
  
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  return (
    <div className="Wrapper">
      {drawerOpened ? <Drawer onClose={()=>setDrawerOpened(false)}/> : null}
      <Header onClickDrawer={()=>setDrawerOpened(true)}/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
