# Full Stack Mini Project — Facts App

## Project Overview

This project is a simple full-stack web application(Shop) developed as part of an Intern Technical Assignment.

The application consists of:

* A Backend REST API that provides a list of facts in JSON format.
* A React Frontend UI that fetches and displays the facts.
* Deployment of both services on cloud hosting (AWS free tier).



## Tech Stack

### Backend

* Django Rest Framework
* Python
* SQLite (default Django DB)
* Deployed on: AWS 

### Frontend

* React (Vite)
* JavaScript
* Deployed on: AWS 

### Version Control

* Git & GitHub (Public Repository)



## ⚙️ Backend Implementation

* Created REST API using Django Rest Framework.
* Implemented an endpoint:


GET /api/products/


API returns hardcoded JSON data:

```json
[
    {
        "id": 1,
        "name": "T-Shirt",
        "description": "Cotton T-shirt",
        "price": 499
    },
    {
        "id": 2,
        "name": "Jeans",
        "description": "Blue denim jeans",
        "price": 999
    },
    {
        "id": 3,
        "name": "Sneakers",
        "description": "Running shoes",
        "price": 1999
    }
]
```

* Configured CORS to allow frontend requests.
* Prepared `requirements.txt` for deployment.


## Frontend Implementation

* Built UI using React (Vite).
* Used `fetch` to call backend API.
* Displayed facts in a responsive list UI.
* Implemented basic styling for better user experience.


## 🔗 API Integration

Frontend calls the deployed backend URL:

```
http://shopping-backend-env.eba-7sj2fdji.us-west-2.elasticbeanstalk.com/api/products/
```

Data is fetched dynamically and rendered on page load.

---

##  Deployment

Both frontend and backend were deployed on AWS cloud free tier.

### Public URLs

* Frontend: http://giri-react-frontend.s3-website.ap-south-1.amazonaws.com
* Backend: http://shopping-backend-env.eba-7sj2fdji.us-west-2.elasticbeanstalk.com/api/products/

---

## 🚀 How to Run Locally



## What I Learned

Through this assignment, I learned:

* Building REST APIs using Django Rest Framework
* Structuring full-stack applications
* Connecting React frontend with backend APIs
* Handling CORS issues
* Cloud deployment on free tier services


This project helped me understand the complete workflow of developing and deploying a full-stack application.





---
