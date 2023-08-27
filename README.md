## Habit Tracker

- This Application is used to track the habits on daily and weekly basis.
- NodeJs, expressJs, mongoDB and ejs technologies are used in creation of this application.

### Usage:

- This Application has 3 pages mainly.
- The first one is the **home page**, where a form is provided in order to create and add the habits.
- The second page is the **habits page**, where all the created habits are shown and there current day status is also shown.
- The user can able to edit the current day's status to done/not done/none in this page.
- The last page is **weekly status page**, where all the habits along with there status from last 6 days and current day's status is shown.
- In this page we can able to change the status of the habits in past 6 days and we can also change the current day's status.

### Folder Structure

```

Habit-Tracker
    |
    |               |--->css
    |--->assets---->|--->images
    |
    |
    |
    |--->config---->|--->mongoose.js
    |
    |
    |
    |--->controllers-->|-->habit_controller.js
    |                  |-->home_controller.js
    |
    |
    |
    |--->models---->|-->habits
    |
    |
    |
    |
    |--->routes---->|-->habit.js
    |               |-->index.js
    |
    |
    |
    |              |---> _header.ejs
    |              |---> habits.ejs
    |--->views---->|--->home.ejs
    |              |--->layout.ejs
    |              |--->weekly_status.ejs
    |
    |-->.env
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json

```

### How to setup the project on local system

- Clone this project into the system.
- Run the command **npm i** or **npm install** for installing all the required dependencies.
- Install the mongodb in the system if not already available.
- Now Run the command **npm start**.
- Open the browser and navigate to **http://localhost:8000/** to start the application.
