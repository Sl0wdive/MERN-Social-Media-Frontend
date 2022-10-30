function App() {
  return (
    <div className="Wrapper">
      <header>
        <div className="HeaderLeft">
          <h1>Svitlir</h1>
        </div>
        <div className="HeaderRight">
          <p>
            Username
          </p>
          <img width={30} height ={30} src = "/img/user.svg" />         
        </div>
      </header>
      <div className="Content">
        <h2>Стрічка новин</h2>
        <div className="Post">
          <img src=""/>
          <p> Текст поста</p>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="/img/likefilled.png"/>
              </button>
                 
              <p>30</p>
            </div>
            <div className="BPRight">
              <button className="ButtonComment">
                <img width={20} height ={20} src = "/img/comment.png" />   
              </button>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
