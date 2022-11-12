import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentBlock from '../../components/CommentBlock';

import styles from './FullPost.module.scss'

function FullPost() {
    
    const arr = [
        {author:"Автор", text: "Текст", at: "12 липстопада"},
        {author:"Автор", text: "Текст22", at: "11 липстопада"}
      ];
    return(
        <div className={styles.PostInfo}>
          <div>
            <div className={styles.media}>
                <img className={styles.imgP} src='/img/DefaultPost.png'/>
            </div>
            <div className={styles.PostText}>
                <h1>Заголовок</h1>
                <h2>Текст</h2>
                <h4>Автор</h4>
                <h4 className={styles.Datаа}>Дата</h4>
            </div>
            <div>
                <h1 className={styles.cohead}>Коментарі</h1>
            </div>
            <div>
                {arr.map((obj)=>(
                <CommentBlock
                text={obj.text}
                author={obj.author}
                at={obj.at}
                />
                ))};
            </div>
        </div>
      </div>
      )
}

export default FullPost;