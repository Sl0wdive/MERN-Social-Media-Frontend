import styles from './PostBlock.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { fetchRemovePost } from '../../redux/slices/posts';

function PostBlock(props){
  const dispatch = useDispatch();
  const onClickRemove = () => {
    if (window.confirm("Видалити допис?")){
      dispatch(fetchRemovePost(props.id));
      }
  };

  return(
  <div className={styles.Post}>
      {props.isEditable && (
      <div className={styles.editButtons}>
        <a href={`/posts/id/edit`}>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </a>
        <IconButton onClick={onClickRemove} color="secondary">
          <DeleteIcon />
        </IconButton>
      </div>
    )}
      <div className={styles.imgCenter}>
          <img src={props.imgURL} className={styles.PostImage} alt ="Image"/>
      </div>
      <h5>{props.title}</h5>
      <h5>Автор: {props.author}</h5>
      <h6>{props.createdAt}</h6>
      <div className={styles.BottomPost}>
          <div className={styles.BPLeft}>
              <button className={styles.ButtonLike}>
                  <img width={20} height ={20} src = "/img/like.png" alt="like"/>
              </button>
              <p>{props.likes}</p>
          </div>
          <div className={styles.BPRight}>
              <Link to={`/post/${props.id}`}>
              <button className={styles.ButtonComment}>
                  <img width={20} height ={20} src = "/img/comment.png" />
              </button>
              </Link>
              <p>{props.comments}</p>
          </div>
      </div>
  </div>
  );
}

export default PostBlock;