# Password Manager
Secure password management application

## User Stories

* As a user, I want to be able to create an account to manage my passwords.

* As a user, I want to see all of my stored passwords.

* As a user, I would like to generate new secure passwords for new applications.

### Acceptance Criteria

* It's done when the `/` homepage route renders a login page.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/apps` route renders the logged-in user's saved passwords and a form to save a new password.

* It's done when the `/apps/:id` route renders the login information saved for a specific app.

* It's done when only a logged in user can visit the `/apps` route.

* It's done when a logged in user is redirected to `/apps` when they try to visit `/` again.

* It's done when a user on the apps page can use the form to create a new password in the database.

* It's done when a user on the apps page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

* It's done when the library generate-password is used to generate a new password.

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

---
