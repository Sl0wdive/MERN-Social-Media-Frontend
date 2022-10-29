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
        <h2>__</h2>
      </div>
    </div>
  );
}

export default App;
