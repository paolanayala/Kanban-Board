# Kanban-Board
 Generated UI for the login page and added authentication with JWT to the server API. 

# Description
This project was built to provide a secure and user-friendly platform for managing tasks and projects using the Kanban methodology. It integrates modern authentication mechanisms to ensure data privacy and seamless user experience. It addresses the need for a secure, efficient, and visually intuitive tool for task management. By implementing secure authentication using JSON Web Tokens (JWT), it ensures that only authorized users can access the Kanban board, protecting sensitive project data.

# Features
**Secure Authentication:** Login page with form inputs for username and password.

**Token Management: **JWT-based authentication, securely stored in the client’s local storage.

**Error Handling:** Informative error messages for incorrect credentials.

**Session Management:** Automatic session expiration after a defined period of inactivity.

**Task Management: **Intuitive Kanban board for creating, updating, and managing tasks.

**Logout Functionality:** Secure removal of JWT and redirection to the login page.

# Installation
**Requires:** Node.js, npm, MongoDB

## Steps
Clone the repository, navigate to the project directory, install dependencies, configure environment variables, and finally start the development server in order to access the app in your browser. 

# Usage
1.** Login:** Use your credentials to log in and access the Kanban board.

2. **Manage Tasks:** Create, update, and move tasks across different stages of the board.

**Logout:** Log out securely to invalidate your session.

# Future Enhancements 
Role-based access control for team collaboration.

Drag-and-drop functionality for tasks.

Integration with external APIs for notifications and analytics.

Improved session management using refresh tokens.

# License
This project is licensed under the MIT License.