function App() {
  return (
    
    <div className="Wrapper">
      <div className="DrawerShadow">
        <div className="Drawer">
          <h2>Username</h2>

          <div className="UserInfo">
            <img width = {300} height = {300} src = "/img/user.svg"/>
            <div className="UserMenu">
              <button className="ButtonHome">
                <h3>Стрічка новин</h3>
              </button>
              <br/>
              <button className="ButtonMyPost">
                <h3>Моя сторінка</h3>
              </button>
              <br/>
              <button className="ButtonCreatePost">
                <h3>Створити новий допис</h3>
              </button>
              <br/>
              <button className="ButtonMyFollowings">
                <h3>Підписки</h3>
              </button>
              <br/>
              <button className="ButtonChats">
                <h3>Діалоги</h3>
              </button>
              <br/>
              <button className="ButtonLogout">
                <h3>Вийти з акаунту</h3>
              </button>
              <br/>
            </div>
          </div>
        </div>
      </div>

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
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
        

        <div className="Post">
          <img src=""/>
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
        </div><div className="Post">
          <img src=""/>
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
        </div><div className="Post">
          <img src=""/>
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
        </div><div className="Post">
          <img src=""/>
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
        </div><div className="Post">
          <img src=""/>
          <h5> Текст поста</h5>
          <div className="BottomPost">
            <div className="BPLeft">
              <button className="ButtonLike">
                <img width={20} height ={20} src = "/img/like.png" alt="like"/>
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
