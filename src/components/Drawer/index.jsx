import styles from './Drawer.module.scss'

function Drawer(props){
    return(
        <div className={styles.DrawerShadow}>
            <div className={styles.Drawer}>
                <button onClick={props.onClose}>X </button>
                <h2>Username</h2>
                <div className={styles.Info}>
                    <img width = {300} height = {300} src = "/img/user.svg"/>
                    <div className={styles.UserMenu}>
                        <button className={styles.button}>
                            <h3>Стрічка новин</h3>
                        </button>
                        <br/>
                        <button className={styles.button}>
                            <h3>Моя сторінка</h3>
                        </button>
                        <br/>
                        <button className={styles.button}>
                            <h3>Створити новий допис</h3>
                        </button>
                        <br/>
                        <button className={styles.button}>
                            <h3>Підписки</h3>
                        </button>
                        <br/>
                        <button className={styles.button}>
                            <h3>Діалоги</h3>
                        </button>
                        <br/>
                        <button className={styles.ButtonLogout}>
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