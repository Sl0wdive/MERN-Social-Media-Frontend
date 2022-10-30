
import PostBlock from './components/PostBlock';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    
    <div className="Wrapper">
      <Drawer/>
      <Header/>
      
      <div className="Content">
        <h2>Стрічка новин</h2>
        <PostBlock/>

      </div>
    </div>
  );
}

export default App;
