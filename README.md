## What is this application all about?
The company: 'Jones, Murphy and Stark' wants a representation of their employees in a dashboard.
### Funcational requirements:
    Sort the employee cards based on firstname/lastname.
    Search option to filter employee cards based on their name.
    On click of the employee card more details need to be provided in a modal.
### Non-functional requirement:
    The application needs to be responsive (tablet and mobile).

## How to install?
 `npm install`
 
## How to run?
 `npm start`
 
 You should see a development server start and a browser window pointing to location: http://localhost:3000/ start automatically. (or a different port if you have another app running on the same 3000 port.)

## How to run the tests?
   `npm test`
   
   The test cases perform Shallow testing using Jest and Enzyme to validate the DOM content of all components used.
   
### Assumptions/Project Notes:
    Search: Supported based on firstname or lastname only.
    Dialog closure: Click outside should also close the dialog.

## Implemented version:
    The basic React application with card of each user is now made available.
    Click on 'Sort by:' to sort results in ascending order by firstName or lastname
    Search for a particular user card by typing search characters in 'Search:'
    Mobility support added.
