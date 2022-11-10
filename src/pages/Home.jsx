import React from 'react';
import PostBlock from '../components/PostBlock';
import axios from '../axios';

function Home() {
    React.useEffect(()=>{
        axios.get('/posts');
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