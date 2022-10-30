function PostBlock(props){
    return(
    <div className="Post">
        <img src={props.imgURL}/>
        <h5>{props.title}</h5>
        <div className="BottomPost">
            <div className="BPLeft">
                <button className="ButtonLike">
                    <img width={20} height ={20} src = "/img/like.png" alt="like"/>
                </button>
                <p>{props.likes}</p>
            </div>
            <div className="BPRight">
                <button className="ButtonComment">
                    <img width={20} height ={20} src = "/img/comment.png" />
                </button>
                <p>{props.comments}</p>
            </div>
        </div>
    </div>
    );
}

export default PostBlock;