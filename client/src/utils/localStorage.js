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
