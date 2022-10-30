function Drawer(){
    return(
        <div style={{display: 'none'}} className="DrawerShadow">
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
    );
}

export default Drawer;