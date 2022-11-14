import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentBlock from '../../components/CommentBlock';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../../redux/slices/comments'; 

import styles from './FullPost.module.scss'
import axios from '../../axios';
import PostBlock from '../../components/PostBlock';
import AddComment  from '../../components/AddComment';
import { SelectisAuth } from '../../redux/slices/auth';

function FullPost() {
    
    const isAuth = useSelector(SelectisAuth);
    const [data, setData] = React.useState();
    const [comments, setComment] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const [commentLoading, setCommentLoading] = React.useState(true);
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
            setComment(res.data);
            setCommentLoading(false);
        }).catch((err) =>{
            console.warn(err);
            alert('Error');
        });
    }, []);
    

    if(isLoading){
        return <PostBlock/>
    }


    return(
        <div className={styles.PostInfo}>
          <div>
            
            <div className={styles.media}>
                
                <img className={styles.imgP} src={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}` : '/img/DefaultPost.png'}/>
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
                {(commentLoading ? [...Array(3)] : comments).map((obj, index) =>
                commentLoading ? (
                <></>
                ) : (
                <CommentBlock
                text={obj.content}
                author={obj.commenter.fullName}
                at={obj.createdAt}
                />
                ))}
                {isAuth ? (
                    <AddComment></AddComment>
                ) : (
                    <>
                    </>
                )}
            </div>
        </div>
      </div>
    )
}

export default FullPost;