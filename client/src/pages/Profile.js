import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { EditFrom } from '../components/EditForm';
import { QUERY_USER, QUERY_ME } from '../utils/queries';



import Auth from '../utils/auth';
import EditForm from '../components/EditForm';
  // refactored to use GraphQL API instead of RESTful API
//   const [login, { loading }] = useMutation(LOGIN_USER);

const Profile = () => {
    const { username: userParam } = useParams();
    const  [isEdit, setIsEdit] = useState(false);
   
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }

    return (

        <div className="flex-row justify-center mb-3">
            <h1>Profile page</h1>
 
            <h2 className="col-12 col-md-12 bg-dark text-light p-3 mb-5">Welcome to { `${user.username}'s`} profile!</h2>

            <div> 
                <h3 className="col-12 col-md-12 p-3 mb-5"> Personal Information </h3>
            {/* to include information from child form and zipcode obtained during signup */}
            <p class= "mx-3"> Username: {`${user.username}`}</p>
            <p class= "mx-3"> Email: {`${user.email}`}</p>
            {/* <p class= "mx-3"> Password: {`${user.password}`}</p> */}
            <p class= "mx-3"> Number of Children: 
                {/* {`${user.kids}`} */}
            </p>
            <p class= "mx-3"> Children's Age Group:</p>
            <p class= "mx-3"> Children's Full Name:</p>
            <p class= "mx-3"> Zipcode: 
                {/* {`${user.zipcode}`} */}
            </p>
            
            {/* original code for edit button */}
            {isEdit?
              (<EditForm></EditForm>)
            :
              (<button 
              type="button" 
              class="btn btn-success mx-3" 
              data-mdb-ripple-color="dark" 
              onClick={() => setIsEdit(true)}            
              >
              Edit
              </button>)
            }
            


       
            </div>
            <div>
                <h3 className="col-12 col-md-12"> Saved Searches </h3>

                <p class= "mx-3"> Search List </p>

            </div>


            <div> 
                <h3 className="col-12 col-md-12 p-3 mb-5"> Quick Links </h3>
               
            
            <button type="button" class="btn btn-success mx-2" data-mdb-ripple-color="dark" 
            // onClick={search} 
            >Education</button>
            
            <button type="button" class="btn btn-warning mx-2" data-mdb-ripple-color="dark" 
            // onClick={search} 
            >Legal</button>
           
            <button type="button" class="btn btn-info mx-2" data-mdb-ripple-color="dark" 
            // onClick={search} 
            >Housing</button>
            
            </div>

        </div>
    )
  
    // Below is sample code to be used later for search saves //


  
    //       <div className="col-12 col-md-10 mb-5">
    //         <SearchList
    //           searchSaves={user.saves}
    //           title={`${user.username}'s saves...`}
    //           showTitle={false}
    //           showUsername={false}
    //         />
    //       </div>
    //       {!userParam && (
    //         <div
    //           className="col-12 col-md-10 mb-3 p-3"
    //           style={{ border: '1px dotted #1a1a1a' }}
    //         >
    //           <SearchForm />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // );
  };
  
  export default Profile;



//first iteration of code below - to be DELETED 

  // function Profile() {
//     // const {setAuthTokens} = authService(); 

//     // const [userFormData, setUserFormData] = useState({username});
    
//     // var user = JSON.parse(localStorage.username('username'));

//     return (
//         <div>
//             <h1>Profile page</h1>
//             {/* <p>Welcome, {username}!</p> */}

//             <button type="button" class="btn btn-warning" data-mdb-ripple-color="dark"
//             // onClick={logout} 
//             >Search</button>
//         </div>
//     )
// }

// export default Profile;