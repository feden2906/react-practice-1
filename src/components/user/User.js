import {useEffect, useState} from "react";
import Posts from "../posts/Posts";
import {getCommentsOfUser, getPostsOfUser} from "../../services/user.service";
import Comments from "../comments/Comments";

export default function User({item: userItem}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsOfUser(userItem.id).then(({value}) => setPosts([...value]));
    }, [userItem.id]);
let [comments, setComments] = useState ([]);
    useEffect(() => {
        getCommentsOfUser(userItem.id).then(({value}) => setComments([...value]));
    }, [userItem.id]);


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

            <h2>{userItem}</h2>
            <Posts items={posts}/>
            <Comments items= {comments}/>
        </div>
    );
}