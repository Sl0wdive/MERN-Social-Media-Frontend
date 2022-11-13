import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss'
import { SelectisAuth } from '../../redux/slices/auth';


const AddPost = () => {
  const isAuth = useSelector(SelectisAuth)
  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

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

  if (!isAuth){
    return <Navigate to="/"/>
  }

  return (
    <div className={styles.content} style={{ padding: 30 }}>
      <Button variant="outlined" size="large">
        Загрузити картинку
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Видалити
        </Button>
      )}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      <TextField 
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок допису..."
        fullWidth
      />
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
      <div className={styles.buttons}>
        <Button className={styles.buttonUp} size="large" variant="contained">
          Опублікувати
        </Button>
        <Link to="/">
          <Button size="large">Відміна</Button>
        </Link>
      </div>
    </div>
  );
};


export default AddPost;