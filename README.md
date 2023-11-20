## Assignment 8 - Cameron Crosby

# Purpose

Create a fully-functional CRUD application using MVC, SPD. Site is fully responsive and contains user feedback.


# Site Details
- Single Page Document. Views are injected using a hashchange listener
- Model-View-Controller. Data is stored in the model (services.js) and modified by the controller (index.js -> app.js)
- User Feedback. Modals are implemented to hide loading and to confirm the users' intention to delete a recipe.
- CRUD. Users can create a recipe, view their recipes in card layouts, select a recipe to view more details, edit their recipes to save alterations to the recipe, and delete a recipe from their recipes.
- Authentication. Users can sign up and login using firebase email/password authentication. Their display name is updated on their profile and used in headers throughout the site. Nav is updated when user logs in (login becomes logout and "your recipes" is only displayed when logged in)

# Other notes
- The detailed view of a recipe is a modal that pops up to display the information without a page load.
- Upon editing/deleting a recipe, the recipe array is updated before loading the card view again. 
- There is a card-sized button that allows users to add recipes. This is always the last card listed in the card view. 
- Used webpack library to export relevant functions to services.js


Access homework 8 by:
https://in-info-web4.informatics.iupui.edu/~camcrosb/hw8-315/dist/

# Access homework from past weeks

Access homework 7 by:
https://in-info-web4.informatics.iupui.edu/~camcrosb/hw7-315/dist/

Access homework 6 by: 
https://in-info-web4.informatics.iupui.edu/~camcrosb/hw6-315/

Access homework 4 by:
https://in-info-web4.informatics.iupui.edu/~camcrosb/hw4-315/
