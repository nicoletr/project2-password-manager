# Password Manager
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Description](#description)
* [User Stories](#user-stories)
* [Acceptance Criteria](#acceptance-criteria)
* [Specifications](#specifications)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Demonstration](#demonstration)
* [Questions](#questions)
* [Licensing](#licensing)

## Description

A secure password management application to save all the passwords you need to remember in your day to day life.

## User Stories

* As a user, I want to be able to create an account to manage my passwords.

* As a user, I want to see all of my stored passwords.

* As a user, I would like to generate new secure passwords for new applications.

## Acceptance Criteria

* It's done when the `/` homepage route redirects to the login `/login` page.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/` route renders the logged-in user's saved passwords.

* It's done when the user can click a 'new' or '+' button to add a new app to their list.

* It's done when only a logged in user can visit the `/` route.

* It's done when a user on the apps page can use the form to create a new password in the database.

* It's done when a user on the apps page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

* It's done when the npm library generate-password is used to generate a new password.

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Apps`

    * `id`: primary key

    * `username`

    * `password`

    * `application_name`

    * `web_address`

    * `user_id`: foreign key that references `User.id`

  * Users have many apps, and apps belong to a user.

    * If a user is deleted, all associated apps are also deleted.


## Installation
```
1. Clone or fork the remote repo to your local
2. Download and install node.js
3. Download and install Insomnia to test routes
```

## Usage
```
1. Run 'npm install'
2. Login to Mysql and run 'source schema.sql' through the db folder
3. Run 'npm seed' to seed the database
4. Run either 'npm start'
5. Test the routes via Insomnia (optional)
6. Open the app in your browser using localhost at the specified PORT or deploy via Heroku
```

## Contributing
To contribute to this repo, follow the below steps:
```
1. Clone the remote repo to your local
2. Create your branch
3. Add, commit, push your branch to the remote repo
4. Create a pull request
5. Wait for approvals, comments, and/or change requests
```

## Heroku Deployment
[Use the app here](https://safe-headland-04957.herokuapp.com/)


## Licensing 
This project is licensed under [MIT](https://opensource.org/licenses/MIT)
---
