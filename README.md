# Parent-Helper-Hub

Project #3

## Project Description

This app allows single parents access resources that they need in one app.

## Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Motivation for Development](#motivation-for-development)
* [Process](#process)
* [Technologies Used](#technologies-used)
* [Challenges](#challenges)
* [Successes](#successes)
* [Usage](#usage)
* [Goals for Future Development](#goals-for-future-development)
* [Support](#support)
* [Deployed Site](#deployed-site)
* [Tasks and Roles](#tasks-and-roles)
* [Credits and Contributors](#credits-and-contributors)

## User-Story

* AS A who is interested in helping single parents easily find resources for schools, housing, legal, and healthcare
* I WANT a place where all information is brought together into one site
* SO THAT it can support single parents
* AND SO THAT these resources are easily accessible

## Acceptance Criteria

* GIVEN a Parent Helper Hub Site

* WHEN I visit the site for the first time
* THEN I am presented on a homepage, landing site, which includes information about the site, signup, and contact us info
* WHEN I click on login/sign up
* THEN I am prompted to sign up or login in
* WHEN I sign up
* THEN I must provide a valid email address, username, zipcode, number of children, and a password
* WHEN I am done signing up
* THEN I am automatically directed to the home page
* WHEN I already have an account
* THEN I can login using an email and password
* WHEN I am done logging in
* THEN I am automatically directed to the home page
* WHEN I am logged in
* THEN I can select an icon in the top navbar
* WHEN I would like to search for Schools, Housing, Healthcare, Legal I select one
* THEN I am redirected to a search page for the chosen topic
* WHEN I want to save a search item
* THEN I select save on the search item
* WHEN I select Profile from the navbar
* THEN I am redirected to the profile page where my username appears on the top welcoming me
* WHEN I want to update profile information
* THEN I select the edit/update button to modify some of the profile information
* WHEN I select Logout
* THEN I am logged out of the site

## Motivation for Development

It came to our attention that single parents struggles finding resources in one easily accessible location.
The purpose of this application is to consolidate various topics from various sites into one location.
This will allow single parents to register and save searches for resources of interest such as schools, housing, healthcare, and legal.

## Process

* Topic / Project defined

* Defined a high level breakdown of the project
* Assigned tasks to team members
* High collaboration throughout
  * Working together via zooms, meetings, slack, etc to help with pseudo coding and/or brainstorming how to effectively move ahead in the process
* Set team goals and reasses as needed throughout

## Technologies Used

![Technologies](https://img.shields.io/badge/Trello-F7DF1E?style=for-the-badge&logo=trello&logoColor=purple) was used to help define tasks, schedule, and ownership throughout the different phases of the project.

![Technologies](https://img.shields.io/badge/HTML5-F7DF1E?style=for-the-badge&logo=html5&logoColor=blue)
![Technologies](https://img.shields.io/badge/CSS3-F7DF1E?style=for-the-badge&logo=css3&logoColor=green)
![Technologies](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/bootstrap-F7DF1E?style=for-the-badge&logo=Bootstrap&logoColor=red)
![Technologies](https://img.shields.io/badge/Heroku-purple)
![Technologies](https://img.shields.io/badge/@apollo/client-green)
![Technologies](https://img.shields.io/badge/@stripe/stripejs-orange)
![Technologies](https://img.shields.io/badge/@testing-library/jestdom-green)
![Technologies](https://img.shields.io/badge/@testing-library/react/stripe-orange)
![Technologies](https://img.shields.io/badge/@testing-library/user-event)
![Technologies](https://img.shields.io/badge/develop-yellowgreen)
![Technologies](https://img.shields.io/badge/jwt-decode-yellow)
![Technologies](https://img.shields.io/badge/npm-green)
![Technologies](https://img.shields.io/badge/react-blueviolet)
![Technologies](https://img.shields.io/badge/react-orange)
![Technologies](https://img.shields.io/badge/react-bootstrap-blue)
![Technologies](https://img.shields.io/badge/react-dom-blue)
![Technologies](https://img.shields.io/badge/react-routerdom-blue)
![Technologies](https://img.shields.io/badge/react-scripts-orange)
![Technologies](https://img.shields.io/badge/react-stripecheckout-green)
![Technologies](https://img.shields.io/badge/run-blueviolet)
![Technologies](https://img.shields.io/badge/style-components-green)
![Technologies](https://img.shields.io/badge/styled-components-blueviolet)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/npm%20package-moment-%3CCOLOR%3E?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/Dotenv-yellow)
![Technologies](https://img.shields.io/badge/Bcrypt-green)
![Technologies](https://img.shields.io/badge/apolloserver-express-green)
![Technologies](https://img.shields.io/badge/mdbreact-blueviolet)
![Technologies](https://img.shields.io/badge/jsonwebtoken-blueviolet)
![Technologies](https://img.shields.io/badge/stripe-orange)
![Technologies](https://img.shields.io/badge/npm%20package-express-green?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/npm%20package-mongoose-purple?style=flat-square&logo=npm)
![Technologies](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)

## Challenges

* Merge conflicts
* Git pull origin main when switching branches
* API request “blocked by CORS policy”
* Data type matching
* Handling empty fields

## Successes

* Navigating newness of React
* Integrating past projects and new code 
* Overwriting bootstrap scss, and running out of time
* Debugging across so many files

## Usage

The following screenshots show examples of the interaction and options presented to the user when application is initiated.

Signup/Login:
![Signup/Login](./client/src/assets/images/phh_loginsignup_screenshot.png)

Signup Form:

![Signup Form](./client/src/assets/images/phh_signupform_screenshot.png)

Login Form:

![Login Form](./client/src/assets/images/phh_loginform_screenshot.png)

Welcome Page:

![showing homepage](./client/src/assets/images/phh_welcomepage_screenshot.png)

Profile Page:
![Profile Page](./client/src/assets/images/phh_profile_page.png)

Edit For on Profile Page:

![Edit Form](./client/src/assets/images/phh_profilepage_editform.png)

Saved Schools on Profile Page:

![Saved Schools](./client/src/assets/images/phh_profilepage_savedschools.png)

Searching for Schools:

![Search For Schools](./client/src/assets/images/phh_searchforschools_screenshot.png)

<!-- Searched Schools:

Searched Schools Added to Profile Page: -->

Search for Housing Programs:
![Search for Housing Programs](./client/src/assets/images/phh_searchforhousingprograms_screenshot.png)

Search for Legal Services:
![Search for Legal Services](./client/src/assets/images/phh_searchforlegalservices_screenshot.png)

Search for Healthcare Resources
![Search for Healthcare Resources](./client/src/assets/images/phh_searchforhealthcareresources_screenshot.png)

Footer:

![Footer](./client/src/assets/images/phh_footer_screenshot.png)

Logout: 

![showing where logout is located](./client/src/assets/images/phh_logout_screenshot.png)

## Goals for Future Development

### Short Term Goals

* Allow user to edit profile
  * Number of child(ren)
  * Add child(ren) name(s)
  * Age Group
* Register child(ren) in user profile
* Save favorite schools to each child

### Long Term Goals

* Search functions for:
  * Housing Page
  * Legal Page
  * Healthcare Page


## Support

If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/Project-3-Parent-Helper-Hub/issues) or contact us via email at parenthelperhub@gmail.com.

## Deployed Site

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://parent-helper-hub.herokuapp.com/)

You can find more of our work on our GitHub, [hannybear88](https://github.com/hannybear88/), [heidiwu3388](https://github.com/heidiwu3388), [TrianaD](https://github.com/TrianaD), [cmarielorber](https://github.com/cmarielorber), [fmaldmed](https://github.com/fmaldmed).

## Tasks and Roles

* Hannah Chung
  * Focus: Profile, Edit, Signup, Search List, Utils, Models, Schemas, README, and Presentation
  * Support: Trello

* Triana Deguzman
  * Focus:  Profile, Edit, Signup, Search List, Utils, Models, Schemas, README, and Presentation
  * Support: Trello Coordination and README

* Christen Lorber
  * Focus: Navbar, Schemas, Login/Signup, Donations, Styling throughout
  * Support: App

* Fernando Maldonado
  * Focus: Welcome page, Schemas, Footer
  * Support: App responsiveness

* Heidi Wu
  * Focus: Server Side, Search Page, Schemas, and API
  * Support: Across all

* Team Collaboration
  * Team pseudo coding
  * Reviewing
  * Presentation runs

## Credits and Contributors

* Hannah Chung
* Triana Deguzman
* Christen Lorber
* Fernando Maldonado
* Heidi Wu