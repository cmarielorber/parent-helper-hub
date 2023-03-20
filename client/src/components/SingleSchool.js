import { Card, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import SchoolInfo from "../components/SchoolInfo";

export default function SingleSchool({
  school,
  handleSaveSchool,
  savedSchoolIds,
}) {
  return (
    <Card border="dark" className="school-card">
      <Card.Body className="school-body">
        <SchoolInfo school={school} />
        {Auth.loggedIn() && (
          <Button
            disabled={savedSchoolIds?.some(
              (savedSchoolId) => savedSchoolId === school.schoolId
            )}
            className="btn-block btn-info"
            onClick={() => handleSaveSchool(school.schoolId)}
          >
            {savedSchoolIds?.some(
              (savedSchoolId) => savedSchoolId === school.schoolId
            )
              ? "This school has already been saved!"
              : "Save this school!"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
