import {Card} from "react-bootstrap";

export default function SingleSchool({ school }) {
  return (
    <Card border="dark">
      <Card.Body>
      {school.isPrivate ? <h6>private</h6> : <h6>public</h6>}
      {`${school.rankYear} Rank: ${school.rank} of ${school.rankOf} (${school.rankStatewidePercentage}%)`}
        <Card.Title>{school.schoolName}</Card.Title>
        <Card.Text>{school.street}</Card.Text>
        <Card.Text>{`${school.city} ${school.state}${school.zip}-${school.zip4}`}</Card.Text>
        <Card.Text>{school.phone}</Card.Text>
      </Card.Body>
    </Card>
  );
}
