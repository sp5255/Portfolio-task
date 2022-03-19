import { useState } from "react";
import ShowContent from "./ShowContent";

const Card = (props) => {
    
    
    const {blog} = props;    

    const sendCardId =() =>{
        props.fn(blog?.id);
    }
    
    return (
        <>
            <div className="card m-2 "  style ={{width: "18rem"}} onClick = {sendCardId} >
                <div class="card-body">
                    <h5 class="card-title">{blog?.title}</h5>                    
                    <p class="card-text">
                        {blog?.body}
                    </p>
                </div>
            </div>

           
        </>
    );
};

export default Card;
