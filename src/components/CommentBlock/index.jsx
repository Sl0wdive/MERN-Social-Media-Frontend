import styles from './CommentBlock.module.scss'

function CommentBlock(props){

    return(
    <div className={styles.content}>
        <div>
            <img className={styles.uImg} src='/img/user.svg'/>
        </div>
        <div>
            <h4 className={styles.author}>{props.author}</h4>
            <h4 className={styles.text}>{props.text}</h4>
            <h5 className={styles.at}>{props.at}</h5>
        </div>
    </div>
    );
}

export default CommentBlock;