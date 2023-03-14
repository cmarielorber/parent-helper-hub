import React, {useEffect} from 'react';

function Schools() {

    useEffect(() => {
        let apiURL = `https://api.schooldigger.com/v2.0/schools`;
            apiURL+=`?st=CA`;
            apiURL+=`&city=San%20Diego`;
            apiURL+=`&zip=92130`;
            apiURL+=`&level=Elementary`;
            apiURL+=`&appID=${process.env.REACT_APP_API_ID}`;
            apiURL+=`&appKey=${process.env.REACT_APP_API_KEY}`;
        console.log(apiURL);
        
        fetch(apiURL, { mode: 'no-cors'})
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));

    }, []);

    return (
        <div>
            <h1>School page</h1>
            <p>coming soon .............</p>
        </div>
    )
}

export default Schools;