
import PostBlock from './components/PostBlock';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Текст поста арр', likes: 30, comments: 23, imgURL: '/img/user.svg'},
  {title: 'Текст поста арр2', likes: 130, comments: 223, imgURL: '/img/user.svg'}
];

function App() {
  return (
    
    <div className="Wrapper">
      <Drawer/>
      <Header/>
      
      <div className="Content">
        <h2>Стрічка новин</h2>
        {arr.map((obj)=>(
          <PostBlock
          title= {obj.title}
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
