export default function User({id, name, username, email}) {
    return (
        <div>
            <h2>{id}. {name} - {username}</h2>
            <p>{email}</p>
        </div>
    );
}