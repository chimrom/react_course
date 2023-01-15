import React from "react";

const PostItem = (props) => {
    return <>
        <div className='post'>
            <div className='post__content'>
                <strong>{props.id}. {props.title}</strong>
                <div>
                    {props.body}
                </div>
                <div className='post__btn'>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    </>
}

export default PostItem