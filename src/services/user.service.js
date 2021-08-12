let url = 'https://jsonplaceholder.typicode.com/users';
function getUsers ()  {
    return fetch (url)
        .then (value => value.json());
}

function getPostsOfUser (id) {
    return fetch(url + '/' + id)
        .then(value => value.json())}

function getCommentsOfUser (id) {
    return fetch(url + '/' + id)
        .then(value => value.json())
}
export {getUsers, getPostsOfUser, getCommentsOfUser}