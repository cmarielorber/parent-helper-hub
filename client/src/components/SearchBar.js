import React from "react";
import Colors from "../utils/Colors";
import { MDBCol } from "mdbreact";

const styles= {
    button: {
        // backgroundColor: "none",
        border: "0.1rem solid #e9c46a",
        color: Colors.YELLOW,
        
      },
      search: {
        margin: ".5rem",
      },
};

const SearchBar = () => {
return (
<MDBCol md="6">
<div className="input-group md-form form-sm form-1 pl-0">
<input
       className="form-control my-0 py-1"
       type="text"
       placeholder="Search"
       aria-label="Search"
     />
<div className="input-group-append">
<button style={styles.button} className="btn" type="button">
Search
</button>
</div>
</div>
</MDBCol>
);
};

export default SearchBar;