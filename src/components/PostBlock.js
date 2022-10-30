function PostBlock(){
    return(
    <div className="Post">
        <img src=""/>
        <h5> Текст поста</h5>
        <div className="BottomPost">
            <div className="BPLeft">
                <button className="ButtonLike">
                    <img width={20} height ={20} src = "/img/like.png" alt="like"/>
                </button>
                <p>30</p>
            </div>
            <div className="BPRight">
                <button className="ButtonComment">
                    <img width={20} height ={20} src = "/img/comment.png" />
                </button>
                <p>5</p>
            </div>
        </div>
    </div>
    );
}

export default PostBlock;