import React from "react";
import axios from '../../axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";


function AddComment() {

    const {id} = useParams();
    const [content, setText] = React.useState('');

    const onChange = React.useCallback((value) => {
        setText(value);
        console.log(value)
        }, []);

    const onSubmit = async () => {
        const fields = {
            content
        }

        const { data } = await axios.post(`/comment/${id}`, fields);
        window.location.reload(false);
    };


    return (
    <form>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="/img/user.svg"
        />
        <div className={styles.form}>
          <TextField
            label="Написати коментарь"
            variant="outlined"
            maxRows={3}
            multiline
            fullWidth
            value={content}
            onChange={(e)=> setText(e.target.value)}
          />
          <Button onClick={onSubmit} variant="contained">Відправити</Button>
        </div>
      </div>
    </form>
    );
};

export default AddComment;