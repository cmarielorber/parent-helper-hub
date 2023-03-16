import {Card} from "react-bootstrap";

export default function SingleSchool({ school }) {
  return (
    <Card border="dark">
      <Card.Body>
        {<h6>{school.schoolLevel || ""} {school.lowGrade || ""}-{school.highGrade || ""}</h6>}
        <Card.Title>{school.schoolName}</Card.Title>
        <Card.Text>{`${school.street}, ${school.city}, ${school.state} ${school.zip}-${school.zip4}`}</Card.Text>
        <Card.Text>{school.phone}</Card.Text>
        <Card.Text>{school.districtName && `District: ${school.districtName}`}</Card.Text>
        <Card.Text>{school.numberOfStudents && `Number of Students: ${school.numberOfStudents}`}</Card.Text>
        <Card.Text>{school.pupilTeacherRatio && `Student-Teacher Ratio: ${school.pupilTeacherRatio}`}</Card.Text>
        <Card.Text>{school.averageStandardScore && `Average Standard Score: ${school.averageStandardScore}`}</Card.Text>
        <Card.Text>{school.rank && `Rank: ${school.rank} of ${school.rankOf} (${school.rankStatewidePercentage}%)`}</Card.Text>
        <Card.Text>{school.rankStars && `Stars: ${school.rankStars}`}</Card.Text>
        <Card.Text>
          {school.isCharterSchool && "Charter"} {school.isMagnateSchool && "Magnate"} {school.isVirtualSchool && "Virtual"} {school.isTitleISchool && "Title I"} {school.isTitleISchoolwideSchool && "Title I Schoolwide"}</Card.Text>
        </Card.Body>
    </Card>
  );
}
