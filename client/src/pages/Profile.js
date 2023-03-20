import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import SingleSavedSchool from '../components/SingleSavedSchool';
import { Container, CardColumns } from 'react-bootstrap';
import React from 'react';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};
  
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
                    <SingleSavedSchool school={school} key={school.schoolId}/>
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
