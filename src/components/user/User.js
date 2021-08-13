import {useEffect, useState} from "react";
import Posts from "../posts/Posts";
import {getCommentsOfPost, getPostsOfUser} from "../../services/user.service";
import Comments from "../comments/Comments";

export default function User({item}) {

    return (
        <div>
            {/*<User {...userItem[0]}/>*/}
            {/*<User {...userItem[1]}/>*/}
            {/*<User {...userItem[2]}/>*/}
            {/*<User {...userItem[3]}/>*/}
            {/*<User {...userItem[4]}/>*/}
            {/*<User {...userItem[5]}/>*/}
            {/*<User {...userItem[6]}/>*/}
            {/*<User {...userItem[7]}/>*/}
            {/*<User {...userItem[8]}/>*/}
            {/*<User {...userItem[9]}/>*/}

            <h1>{item.id} - {item.name} - {item.userName}</h1>
            <Posts id={item.id}/>
        </div>
    );
}
