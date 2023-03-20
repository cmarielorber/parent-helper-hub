import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Container, CardColumns } from 'react-bootstrap';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_SCHOOL } from '../utils/mutations';
import SingleSavedSchool from '../components/SingleSavedSchool';
import { removeSchoolId } from '../utils/localStorage';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const [removeSchool] = useMutation(REMOVE_SCHOOL);
    const user = data?.me || {};
  
    async function handleDeleteSchool(schoolId) {
      try {
        await removeSchool({
          variables: {schoolId: schoolId}
        });
        removeSchoolId(schoolId);
      } catch (err) {
        console.error(err);
      }
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className="flex-row justify-center mb-3">
            <h1>Profile page</h1>
            <h2 className="col-12 col-md-12 bg-dark text-light p-3 mb-5">Welcome to { `${user.username}'s`} profile!</h2>
            <div> 
              <h3 className="col-12 col-md-12 p-3 mb-5"> Personal Information </h3>
              <p className= "mx-3"> Username: {`${user.username}`}</p>
              <p className= "mx-3"> Email: {`${user.email}`}</p>
              <p className= "mx-3"> Number of Children: {`${user.childCount}`}
              </p>
              <p className= "mx-3"> Zipcode: {`${user.zipcode}`}
              </p>
            </div>
            <div>
            <Container className="searchposts d-flex flex-column justify-content-center align-items-center"> SCHOOLS
              <CardColumns>
                {user.savedSchools.map((school) => {
                  return (
                    <SingleSavedSchool school={school} key={school.schoolId} handleDeleteSchool={handleDeleteSchool}/>
                  );
                })}
              </CardColumns>
            </Container>
            </div>
        </div>
      </>
    )
}
  
   
  
  export default Profile;
