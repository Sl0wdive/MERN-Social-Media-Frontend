import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PostBlock from './components/PostBlock';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Текст поста арр', author:"Автор", likes: 30, comments: 23, imgURL: '/img/user.svg'},
  {title: 'Текст поста арр2', author:"Автор", likes: 130, comments: 223, imgURL: '/img/user.svg'}
];

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  return (
    <div className="Wrapper">
      {drawerOpened ? <Drawer onClose={()=>setDrawerOpened(false)}/> : null}
      <Header onClickDrawer={()=>setDrawerOpened(true)}/>
      <div className="Content">
        <h2>Стрічка новин</h2>
        {arr.map((obj)=>(
          <PostBlock
          title={obj.title}
          author={obj.author}
          likes={obj.likes}
          comments={obj.comments}
          imgURL={obj.imgURL}
          />
        ))};
      </div>
    </div>
  );
}

export default App;
