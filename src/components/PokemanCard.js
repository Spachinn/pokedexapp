import Card from "react-bootstrap/Card";

export default function PokemanCard({
  name,
  image,
  id,
  weight,
  height,
  abilities,
  type,
}) {
  return (
    <div className="pokeman-card">
      <Card className="card-box">
        <Card.Img src={image} alt="Pokeman Photo"></Card.Img>
        <Card.Body>
          <Card.Text>
            <span>Name:</span> {name.toUpperCase()}
          </Card.Text>
          <Card.Text>
            <span>Rank:</span> {id}
          </Card.Text>
          <Card.Text>
            <span>Height:</span> {(height / 10) * 3.28}
          </Card.Text>
          <Card.Text>
            <span>Weight: </span>
            {weight / 10}
          </Card.Text>
          <Card.Text>
            <span>Abilities:</span> {abilities.join(", ")}
          </Card.Text>
          <Card.Text>
            <span>Type:</span> {type}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
