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
            <h2>{userItem.id} {userItem.name}</h2>
            <Posts items={posts}/>
            <Comments items= {comments}/>
        </div>
    );
}