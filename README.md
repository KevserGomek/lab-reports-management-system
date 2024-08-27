# Lab Report Management System

This project involves creating a laboratory report management system for a hospital.

## Setup

To run the project locally, follow these steps:

### 1- Clone the Repository

First, clone the project from GitHub:

```
git clone https://github.com/KevserGomek/lab-reports-management-system.git
```
  
### 2- Navigate to the Project Directory

Change to the project directory:

```
cd lab-report-management-system
```

### 3- Install Dependencies

Install the project's dependencies using npm or yarn.

If you are using npm:
```
npm install
```

If you are using yarn:
```
yarn install
```

### 4- Start the Project

To start the project in development mode:

```
npm run dev
```

or

```
yarn dev
```

## Pages

### 1- Login (Home) Page
The project includes protected routing, and users need to log in to access the pages. Therefore, logging in on this page is required first.

There are two users registered in the system with 'reader' and 'admin' roles:

- To log in as Admin: 

username: admin password: admin123
- To log in as Reader: 

Username: reader1 Password: reader123

### 2- Reports Page
Users with both roles can access this page, where reports are listed.

On this page:
- Users can search by patient ID, patient name, and lab technician name.
- Reports can be sorted by date.
- Clicking on a report will redirect the user to another page where the details of the report are displayed.

Additionally, the options column visible ONLY to the admin allows:
- Deleting a report using the delete button next to the report.
- Redirecting to the update page of the selected report using the update button next to the report.

### 3- Report Detail Page
Users with both roles can access this page. It displays all the details of the selected report from the Reports page.

### 4- Update Report Page 
Accessible only by admin, this page allows updating the details of the selected report from the Reports page.

### 5- Add Report Page
Accessible only by admin, this page allows adding new reports.

### 6- Not Found Page
Users are redirected to this page if an invalid URL is entered.

### 7- Not Authorized Page
Users are redirected to this page if they are not logged in or try to access a page they do not have permission for.
