export default function Address({street, suite, city, zipcode}) {
  return (
    <div>
      <h2>Address:</h2>
    <p>Street - {street}, suite - {suite}</p>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>

    </div>
  );
}