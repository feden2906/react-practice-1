import Geo from "../geo/Geo";

export default function Address({address: street, suite, city, zipcode, geo}) {
    return (
        <div>
            <h4>Address:</h4>
            <p>Street - {street}, suite - {suite}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipcode}</p>
            <Geo geo={geo}/>
        </div>
    );
}