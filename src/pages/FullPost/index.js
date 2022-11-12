import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentBlock from '../../components/CommentBlock';
import { useParams } from 'react-router-dom';

import styles from './FullPost.module.scss'
import axios from '../../axios';
import PostBlock from '../../components/PostBlock';

function FullPost() {
    const [data, setData] = React.useState();
    const [comments, setComment] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const {id} = useParams();

    React.useEffect(() =>{
        axios.get(`/post/${id}`)
        .then(res =>{
            setData(res.data);
            setLoading(false);
        }).catch((err) =>{
            console.warn(err);
            alert('Error');
        });
    }, []);

    React.useEffect(() =>{
        axios.get(`/comment/${id}`)
        .then(res =>{
            setComment(res.comments);
            setLoading(false);
        }).catch((err) =>{
            console.warn(err);
            alert('Error');
        });
    }, []);
    


    const arr = [
        {author:"Автор", text: "Текст", at: "12 липстопада"},
        {author:"Автор", text: "Текст22", at: "11 липстопада"}
      ];

    if(isLoading){
        return <PostBlock/>
    }

    return(
        <div className={styles.PostInfo}>
          <div>
            
            <div className={styles.media}>
                <img className={styles.imgP} src={data.imgURL || '/img/DefaultPost.png'}/>
            </div>
            <div className={styles.PostText}>
                <h1>{data.title}</h1>
                <h2>{data.text}</h2>
                <h4>{data.user.fullName}</h4>
                <h4 className={styles.Datаа}>{data.createdAt}</h4>
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