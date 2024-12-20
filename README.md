# Angulardt Angular CRUD Application with Authentication

Project Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built with Angular 18 that uses Firebase Authentication for user login and JSON Server as a local database. The project is designed to demonstrate the use of external providers for authentication and data handling. It aims to showcase my skills in implementing Firebase as an authentication provider while also managing local data with JSON Server for simplicity and ease of setup.

Angular 18: A platform for building web applications.
Official Documentation: Angular <a>https://angular.dev<a/>

![image](https://github.com/user-attachments/assets/a923d27b-7e33-4356-930a-0465cf53dff0)

Firebase: Used for Authentication.

Official Documentation: Firebase

JSON Server: A local database for handling data in the app.
https://www.npmjs.com/package/json-server

Official Documentation: JSON Server
Tailwind CSS: A utility-first CSS framework for building custom designs.

Official Documentation: Tailwind CSS
tailwindcss.com
Flowbite: A component library for building UI elements such as forms and buttons.

Official Documentation: Flowbite.com
Ng Zorro: A library of Ant Design components for Angular.

Official Documentation: Ng Zorro https://ng.ant.design/docs/migration-v18/en

How to Run the Project

git clone https://github.com/BUKODONOZOR/AngularDT.git
cd AngularDT

npm install

3. Set up Firebase Configuration
To integrate Firebase into your Angular application, follow these steps:

Go to the Firebase Console.
Create a new project.
In the Firebase Console, navigate to Project Settings > Firebase SDK snippet and copy the Firebase config object.

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

npm install -g json-server
json-server --watch db.json --port 5000

ng serve

Authentication with Firebase
Firebase is used to handle user authentication. It simplifies the login process, as Firebase provides an easy-to-use authentication service. Here's how you can set it up:

Steps to Use Firebase Authentication:
Create a new project in the Firebase Console.
Install the Firebase library for Angular:

npm install @angular/fire firebase
firebase login
ng add @angular/fire

Database with JSON Server
Originally, I intended to use Firestore for the database, but I encountered issues with Firebase SDK integration. This led me to use JSON Server, which is easy to set up and works perfectly for local development. By using JSON Server, I can quickly simulate a REST API without dealing with the complexities of Firestore.

To interact with the local database, JSON Server serves as a mock database that you can easily manipulate.

Additional Libraries Used
Flowbite: Used for styling the signup and signin pages. Flowbite provides pre-designed components that help speed up UI development.

Ng Zorro: I attempted to integrate Ng Zorro to use functional layouts. It's a library based on Ant Design that provides a set of high-quality components for Angular applications.

You can check the app.config.ts to see how I implemented these libraries.

Challenges and Opportunities for Improvement
Password Validations: Currently, the app uses basic password validation. A better password policy and validation rules can be added for improved security.

Ng Zorro and ngx-toastr: I want to fully implement Ng Zorro components for a polished UI and use ngx-toastr for better user notifications.

CRUD Operations: There's room to improve the CRUD operations, focusing on best practices for accessibility, error handling, and user experience.

Full Firebase Integration: I plan to fully integrate Firebase for database management, removing the dependency on JSON Server and leveraging Firestore instead. 

![image](https://github.com/user-attachments/assets/7429373c-f9f8-4096-bb3b-fce176742d21)



