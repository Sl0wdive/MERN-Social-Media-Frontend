import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostBlock from '../components/PostBlock';
import { fetchPosts } from '../redux/slices/posts';
import { logoutw } from '../redux/slices/auth';

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const isPostLoading = posts.status === 'loading';

  React.useEffect(()=>{
    dispatch(fetchPosts());
  }, []);

  const OnClickLogout = () => {
      if (window.confirm("Вийти з акаунту?")){
      dispatch(logoutw());
      window.localStorage.removeItem('token');
      }
  };
  
          
  console.log(isPostLoading);
    
    return(
      <div className="Content">
        <h2  onClick={OnClickLogout}>Стрічка новин</h2>
        <div className="PostsGrid">
          {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) =>
          isPostLoading ? (
            <PostBlock key={index}/>
          ) : (
            <PostBlock
            id = {obj._id}
            title={obj.title}
            author={obj.user.fullName}
            createdAt={(obj.createdAt)}
            likes={obj.likeCount}
            comments={obj.commentCount}
            imgURL={(obj.imgURL || '/img/DefaultPost.png')}
            />
          )
          )}
        </div>
      </div>
    )
}

export default Home;