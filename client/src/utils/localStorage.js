export const getSavedSchoolIds = () => {
  const savedSchoolIds = localStorage.getItem('saved_schools')
    ? JSON.parse(localStorage.getItem('saved_schools'))
    : [];

  return savedSchoolIds;
};

export const saveSchoolIds = (schoolIdArr) => {
  if (schoolIdArr.length) {
    localStorage.setItem('saved_schools', JSON.stringify(schoolIdArr));
  } else {
    localStorage.removeItem('saved_schools');
  }
};

export const removeSchoolId = (schoolId) => {
  const savedSchoolIds = localStorage.getItem('saved_schools')
    ? JSON.parse(localStorage.getItem('saved_schools'))
    : null;

  if (!savedSchoolIds) {
    return false;
  }

  const updatedSavedSchoolIds = savedSchoolIds?.filter((savedSchoolId) => savedSchoolId !== schoolId);
  localStorage.setItem('saved_schools', JSON.stringify(updatedSavedSchoolIds));

  return true;
};



// local storage for saving updates on edit form

// export const getSavedUserIds = () => {
//   const savedUserIds = localStorage.getItem('saved_user')
//     ? JSON.parse(localStorage.getItem('saved_user'))
//     : [];

//   return savedUserIds;
// };

// export const saveUserId = (userIdArr) => {
//   if (userIdArr.length) {
//     localStorage.setItem('saved_user', JSON.stringify(userIdArr));
//   } 
//   else {
//     localStorage.removeItem('saved_user');
//   }
// };

// export const removeId = (userId) => {
//   const savedUserIds = localStorage.getItem('saved_users')
//     ? JSON.parse(localStorage.getItem('saved_users'))
//     : null;

//   if (!savedUserIds) {
//     return false;
//   }

//   // const updateSavedUserIds = savedUserIds?.filter((savedUserId) => savedUserId !== userId);
//   // localStorage.setItem('saved_users', JSON.stringify(updateSavedUsersIds));

//   return true;
// };


