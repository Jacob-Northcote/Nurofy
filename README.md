Nurofy
======
Nurofy is a B2B web platform for showcasing and delivering custom AI solutions, with a focus on advanced neural networks and deep learning models tailored to business needs. The project includes a modern, visually engaging frontend and a Flask-based backend for handling subscriptions and database interactions.
Features
Landing Page: Modern hero section introducing Nurofy and its mission.
What We Do: Detailed section describing the company's AI capabilities and B2B focus.
Model Showcase: Interactive section displaying AI models as cards. Each card can dynamically load an embedded app (e.g., Streamlit) via iframe when clicked.
Get a Quote: Dedicated page for potential clients to contact the team for quotes, including email and phone contact.
Subscription API: Backend endpoint for collecting and validating email subscriptions, with rate limiting and email uniqueness checks.
Responsive Design: Fully responsive layout for desktop and mobile.
Custom Theming: Space-themed background and stylized UI for a unique, professional look.
Project Structure
Nurofy/
Website program/
assets/
space_background.png
index.html
get-a-quote.html
script.js
style.css
backend/
app.py
.env
Backend Overview
Technology Stack
Flask: Web framework for Python.
Flask-MySQLdb: MySQL integration for Flask.
Flask-CORS: Handles Cross-Origin Resource Sharing for frontend-backend communication.
python-dotenv: Loads environment variables from a .env file.
MySQL: Database for storing subscriber information.
Main Functionality
/subscribe (POST):
Accepts JSON with an email field.
Validates email format.
Limits to 5 submissions per IP address.
Ensures email uniqueness.
Stores email, IP, and timestamp in the subscribers table.
Returns JSON response with success/failure and message.
Example Request
POST /subscribe
Content-Type: application/json
{
"email": "user@example.com"
}
Example Response
{
"success": true,
"message": "Thank you for subscribing!"
}
How to Run Locally
Clone the Repository
git clone https://github.com/yourusername/nurofy.git
cd nurofy
Set Up the Backend
Install Python dependencies
It’s recommended to use a virtual environment:
cd backend
python -m venv venv
venv\Scripts\activate # On Windows
Or: source venv/bin/activate # On Mac/Linux
pip install flask flask-mysqldb flask-cors python-dotenv
Set up the MySQL Database
Install MySQL and start the server.
Create a database and table:
CREATE DATABASE nurofy;
USE nurofy;
CREATE TABLE subscribers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255) UNIQUE,
ip_address VARCHAR(45),
created_at DATETIME
);
Configure Environment Variables
Create a .env file in the backend/ directory with the following content (edit as needed):
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DB=nurofy
Run the Backend Server
python app.py
The backend will be available at http://127.0.0.1:5000.
Serve the Frontend
Open a new terminal and run:
cd "Website program"
python -m http.server 8000
Visit http://localhost:8000 in your browser.
Connect Frontend to Backend
The backend is CORS-enabled for http://localhost:8000, so AJAX requests from the frontend will work.
To use the /subscribe endpoint, add a form and JavaScript in the frontend to POST to http://127.0.0.1:5000/subscribe.
Customization
Model Cards: Update the iframe-card elements in index.html to reflect your actual models and their demo URLs.
Contact Info: Edit get-a-quote.html to use your real business email and phone number.
Branding: Replace the background image or adjust styles in style.css to match your brand.
Troubleshooting
CORS Errors: Ensure the backend is running and CORS is enabled for your frontend’s origin.
Database Errors: Double-check your MySQL credentials and that the subscribers table exists.
Port Conflicts: Make sure no other service is using ports 5000 (backend) or 8000 (frontend).
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.
License
MIT
