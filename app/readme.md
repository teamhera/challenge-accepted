Back-end documentation. Maybe these are important...

-------------Controllers---------------
Below is a list of important files

challenges folder:
  -contains functions that are run when requests are sent to '/challenges' routes
  -deals only with the challenges table of the db

users folder:
  main files are: 
    user.challenges.server.controller.js
    user.tasks.server.controller.js
  -these files contain functions that are run when request are sent to '/users' routes
  -deals only with the users table of the db


-------------Models--------------------
These are schemas for the tables used in mongo, _ids are automatically generated 

things to note**
-every task document exists within the task table but the task table is not used

  -user's task array contains personal tasks that is not shared with anyone
  -user's challenge task array contains tasks from universally shared challenge tasks located in challenge table

  -a 'new Task' is created in order to give each task all required properties
  -'new Task' is used to add tasks into users document's task array
  -'new Task' is used to add tasks into challenges documents task array
