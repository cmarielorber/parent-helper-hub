import {Card, Button} from "react-bootstrap";
import Auth from "../utils/auth";
import Stars from "../components/Stars";
import "../styles/schoolstyle.css";

export default function SingleSchool({ school, handleSaveSchool, savedSchoolIds }) {

  return (
    <Card border="dark" className="school-card">
      <Card.Body className="school-body">
        {<h6 className="school-level">{school.schoolLevel || ""} {school.lowGrade || ""}-{school.highGrade || ""}</h6>}
        <Card.Title className="school-name">{school.schoolName}</Card.Title>
        <Card.Text className="school-address">{`${school.street}, ${school.city}, ${school.state} ${school.zip}-${school.zip4}`}</Card.Text>
        <Card.Text className="school-phone">{school.phone}</Card.Text>
        <Card.Text className="school-district">{school.districtName && `District: ${school.districtName}`}</Card.Text>
        <Card.Text className="school-students">{school.numberOfStudents && `Number of Students: ${school.numberOfStudents}`}</Card.Text>
        <Card.Text className="school-ratio">{school.pupilTeacherRatio && `Student-Teacher Ratio: ${school.pupilTeacherRatio}`}</Card.Text>
        <Card.Text className="school-score">{school.averageStandardScore && `Average Standard Score: ${school.averageStandardScore}`}</Card.Text>
        <Card.Text className="school-rank">{school.rank && `Rank: ${school.rank} of ${school.rankOf} (${school.rankStatewidePercentage}%)`}</Card.Text>
        <Card.Text className="school-start">{school.rankStars && (<Stars rankStars={school.rankStars}/>)}</Card.Text>
        <Card.Text className="school-type">
          {school.isCharterSchool==="Yes" && "Charter"} {school.isMagnateSchool==="Yes" && "Magnate"} {school.isVirtualSchool==="Yes" && "Virtual"} {school.isTitleISchool==="Yes" && "Title I"} {school.isTitleISchoolwideSchool==="Yes" && "Title I Schoolwide"}
        </Card.Text>


        {Auth.loggedIn() && (
          <Button
            disabled={savedSchoolIds?.some((savedSchoolId) => savedSchoolId === school.schoolId)}
            className='btn-block btn-info'
            onClick={() => handleSaveSchool(school.schoolId)}>
            {savedSchoolIds?.some((savedSchoolId) => savedSchoolId === school.schoolId)
              ? 'This school has already been saved!'
              : 'Save this school!'}
          </Button>
        )}



        </Card.Body>
    </Card>
  );
}
