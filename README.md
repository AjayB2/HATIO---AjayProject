# Todo App

This is a full-stack Todo management application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create projects and manage todos within those projects. The app also includes user authentication and the ability to export project summaries as GitHub Gists.

## Features

- User authentication (register/login)
- Create, update, delete projects
- Add, update, mark complete todos within projects
- Export project summaries as Gists on GitHub
- JWT-based authentication
- Full CRUD functionality for todos

## Prerequisites

- Node.js
- MongoDB
- GitHub account with a personal access token for Gists


Objective:
Develop an application to manage todos with the following capabilities:
1. Create a new project.
2. Manage todos within a project (Add, Edit, Update, and Mark as complete).
3. Export the project summary as a gist on GitHub.

Expectations:
1. Selected schema/representation should include:
a. Project: Unique Id, Title, Created Date, List of Todos.
b. Todo: Unique Id, Description, Status, Created Date, Updated Date.
2. Basic Auth for user login.
3. Home page provisions:
a. Create a new project.
b. List all projects.
c. View a project.
4. Detailed project view should include:
a. Project title (Editable).
b. List of todos with description, date, and completion status.
c. Actions to Add/Update/Remove a todo.
d. Mark a todo as pending or complete.
e. Action to export summary as a secret gist.
5. Application should save the exported gist file to the local system (as markdown).
6. Adherence to proper code conventions and style guide (package, names,
indentation, etc.).
7. Secret gist template/format example provided.