import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Register from './pages/Register';
import Login  from './pages/Login';
import AddPost from './pages/AddPost';
import FullPost from './pages/FullPost';
import { fetchMe, SelectisAuth } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(SelectisAuth);

  React.useEffect(() =>{
    dispatch(fetchMe())
  }, []);
  
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
        <Route path="/post/:id" element= {<FullPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
