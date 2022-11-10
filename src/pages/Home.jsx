import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostBlock from '../components/PostBlock';
import { fetchPosts } from '../redux/slices/posts'

function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const isPostLoading = posts.status == 'loading';

  React.useEffect(()=>{
    dispatch(fetchPosts());
  }, []);

    const arr = [
        {title: 'Текст поста арр', author:"Автор", likes: 30, comments: 23, imgURL: '/img/user.svg'},
        {title: 'Текст поста арр2', author:"Автор", likes: 130, comments: 223, imgURL: '/img/user.svg'}
      ];
    return(
        <div className="Content">
        <h2>Стрічка новин</h2>
        {arr.map((obj)=>(
          <PostBlock
          title={obj.title}
          author={obj.author}
          likes={obj.likes}
          comments={obj.comments}
          imgURL={obj.imgURL}
          />
        ))};
      </div>
    )
}

export default Home;