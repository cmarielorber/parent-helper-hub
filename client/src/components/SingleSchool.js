import { Card, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import Stars from "../components/Stars";
import "../styles/schoolstyle.css";

const styles = {
  fontName:{
    fontFamily: 'Crushed, cursive',
  },
  fontBody: {
    fontFamily: 'Crushed, sans-serif',
  }
};

export default function SingleSchool({
  school,
  handleSaveSchool,
  savedSchoolIds,
}) {
  return (
    <Card border="dark" className="school-card">
      <Card.Body className="school-body">
        <Card.Title className="school-name" style={styles.fontName}>{school.schoolName}</Card.Title>
        {
          <h6 className="school-level">
            {school.schoolLevel || ""} {school.lowGrade || ""}-
            {school.highGrade || ""}
          </h6>
        }
        <Card.Text className="school-address" style={styles.fontBody}>{`${school.street}, ${school.city}, ${school.state} ${school.zip}-${school.zip4}`}</Card.Text>
        <Card.Text className="school-phone" style={styles.fontBody}>{school.phone}</Card.Text>
        <Card.Text className="school-district" style={styles.fontBody}>
          {school.districtName && `District: ${school.districtName}`}
        </Card.Text>
        <Card.Text className="school-students" style={styles.fontBody}>
          {school.numberOfStudents &&
            `Number of Students: ${school.numberOfStudents}`}
        </Card.Text>
        <Card.Text className="school-ratio" style={styles.fontBody}>
          {school.pupilTeacherRatio &&
            `Student-Teacher Ratio: ${school.pupilTeacherRatio}`}
        </Card.Text>
        <Card.Text className="school-score" style={styles.fontBody}>
          {school.averageStandardScore &&
            `Average Standard Score: ${school.averageStandardScore}`}
        </Card.Text>
        <Card.Text className="school-rank" style={styles.fontBody}>
          {school.rank &&
            `Rank: ${school.rank} of ${school.rankOf} (${school.rankStatewidePercentage}%)`}
        </Card.Text>
        <Card.Text className="school-stars" style={styles.fontBody}>
          {school.rankStars && <Stars rankStars={school.rankStars} />}
        </Card.Text>
        <Card.Text className="school-type" style={styles.fontBody}>
          {school.isCharterSchool === "Yes" && "Charter"}{" "}
          {school.isMagnateSchool === "Yes" && "Magnate"}{" "}
          {school.isVirtualSchool === "Yes" && "Virtual"}{" "}
          {school.isTitleISchool === "Yes" && "Title I"}{" "}
          {school.isTitleISchoolwideSchool === "Yes" && "Title I Schoolwide"}
        </Card.Text>

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
