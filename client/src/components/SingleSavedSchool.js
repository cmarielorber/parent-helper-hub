import {Card, Button} from "react-bootstrap";
import SchoolInfo from "./SchoolInfo";

export default function SingleSavedSchool({school, handleDeleteSchool}) {

  return (
    <Card border="dark" className="school-card">
      <Card.Body className="school-body">
        <SchoolInfo school={school} />
        <Button
          className="btn-block btn-info"
          onClick={() => handleDeleteSchool(school.schoolId)}
        >
          Remove this school!
        </Button>
      </Card.Body>
    </Card>
  );
}
