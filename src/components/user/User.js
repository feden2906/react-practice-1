import Address from "../address/Address";

export default function User({id, name, username, email, item: {address}}) {
    return (
        <div>
            <h2>{id}. {name} - {username}</h2>
            <p>{email}</p>
            <Address address = {address}/>
        </div>
    );
}