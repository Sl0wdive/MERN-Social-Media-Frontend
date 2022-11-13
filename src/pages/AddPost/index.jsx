import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss'
import { SelectisAuth } from '../../redux/slices/auth';
import axios from '../../axios';

const AddPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(SelectisAuth);
  const [isLoading, setloading] = React.useState(false);
  const [imageUrl, setImageURL] = React.useState('');
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const inputRef = React.useRef('');

  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData)
      console.log(data);
      setImageURL(data.url);
    } catch(err){
      console.warn(err);
      alert('Помилка завантаження');
    }
  };

  const onClickRemoveImage = () => {
    setImageURL('');
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setloading(true);

      const fields = {
          title,
          imageUrl,
          text
      }

      const { data } = isEditing 
      ? await axios.patch(`/post/${id}`, fields) 
      : await axios.post('/post', fields) ;

      const _id = isEditing ? id : data._id;

      navigate(`/post/${_id}`);

    } catch (err) {
      console.warn(err);
      alert('Помилка завантаження');
    }
  };

  React.useEffect(() => {
    if (id) {
      axios.get(`/post/${id}`).then(({ data }) =>{
        setTitle(data.title);
        setText(data.text);
        setImageURL(data.imageUrl);
      }).catch(err =>
        {
          alert('Помилка');
        })
    }
  }, [])

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введіть текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  if (!window.localStorage.getItem('token') && !isAuth){
    return <Navigate to="/"/>
  }


  return (
    <div className={styles.content} style={{ padding: 30 }}>
      <Button onClick={() => inputRef.current.click()} variant="outlined" size="large">
        Загрузити картинку
      </Button>
      <input ref={inputRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <> <Button variant="contained" color="error" onClick={onClickRemoveImage}>
        Видалити
        </Button>
        <img className={styles.image} src={`https://mern-social-media-2022.herokuapp.com${imageUrl}`} alt="Uploaded" />
        </>
       )}
      <br />
      <br />
      <TextField 
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок допису..."
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        fullWidth
      />
      <SimpleMDE className={styles.editor} 
      value={text} 
      onChange={onChange} 
      options={options} 
      />
      <div className={styles.buttons}>
      <Button onClick={onSubmit} className={styles.buttonUp} size="large" variant="contained">
        {isEditing ? "Змінити" : "Опублікувати"}
      </Button>
      <Link to="/">
        <Button size="large">Відміна</Button>
      </Link>
      </div>
    </div>
  );
};


export default AddPost;