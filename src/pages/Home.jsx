import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostBlock from '../components/PostBlock';
import { fetchPosts } from '../redux/slices/posts'

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const isPostLoading = posts.status === 'loading';

  React.useEffect(()=>{
    dispatch(fetchPosts());
  }, []);
  
          
  console.log(isPostLoading);
    
    return(
        <div className="Content">
        <h2>Стрічка новин</h2>
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
    )
}

export default Home;