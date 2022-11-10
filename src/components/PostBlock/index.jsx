import styles from './PostBlock.module.scss'

function PostBlock(props){
    return(
    <div className={styles.Post}>
        <img src={props.imgURL} className={styles.PostImage}/>
        <h5>{props.title}</h5>
        <h5>{props.author}</h5>
        <div className={styles.BottomPost}>
            <div className={styles.BPLeft}>
                <button className={styles.ButtonLike}>
                    <img width={20} height ={20} src = "/img/like.png" alt="like"/>
                </button>
                <p>{props.likes}</p>
            </div>
            <div className={styles.BPRight}>
                <button className={styles.ButtonComment}>
                    <img width={20} height ={20} src = "/img/comment.png" />
                </button>
                <p>{props.comments}</p>
            </div>
        </div>
    </div>
    );
}

export default PostBlock;