# Digital Thesis Repository System

The **Digital Thesis Repository System** is a web-based platform designed for managing, storing, and reviewing student theses. The system allows users such as students, visitors, department administrators, and super administrators to interact with theses through features like submission, review, and access control. 

The project is built using React for the front end, with routing for different user roles, and supports both login and registration functionalities.

Development Stage: Phase 2 - Building front end

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Roles**: Supports multiple roles including Students, Department Administrators, Visitors, and Super Administrators.
- **Role-Based Navigation**: Different routes and dashboards for users based on their role.
- **Authentication**: Simple login and registration functionality with role-based redirection.
- **User Registration**: New users can sign up and specify their role (Student, Department Admin, or Visitor) and education level.
- **Forgot Password**: Link available for password recovery (placeholder functionality).
- **Responsive Design**: Ensures the app works across various screen sizes.

## Installation

Follow these steps to get the project running locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/digital-thesis-repository.git
    cd digital-thesis-repository
    ```

2. **Install dependencies**:
    Ensure you have Node.js and npm installed. Then run:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **View in the browser**:
    Once the server is running, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### Login

- Users can log in using hardcoded credentials for demonstration purposes:
  - **Student**: 
    - Email: `student@example.com`
    - Password: `student`
  - **Visitor**: 
    - Email: `visitor@example.com`
    - Password: `visitor`
  - **Department Admin**: 
    - Email: `admin@example.com`
    - Password: `departmentadmin`
  - **Super Admin**: 
    - Email: `superadmin@example.com`
    - Password: `super-admin`

### Registration

- New users can register with the following details:
  - First Name
  - Last Name
  - Email
  - Password
  - Role (Student, Department Admin, or Visitor)
  - Education Level (Bachelor's, Master's, or PhD)

### Navigation

- **Students** are directed to a **dashboard** upon login.
- **Visitors** have access to a separate **visitor page**.
- **Department Admins** and **Super Admins** have their own specific dashboards as well.

## Folder Structure

```bash
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── components          # Reusable components
│   │   ├── Footer.js       # Footer component
│   │   └── RegisterLogin.js# Main login/registration page
│   ├── css                 # Stylesheets
│   │   └── RegisterLogin.css # Styles for the login/registration
│   ├── App.js              # Main application file
│   ├── index.js            # Entry point for React
│   └── ...
├── package.json            # Project metadata and dependencies
└── README.md               # This file
