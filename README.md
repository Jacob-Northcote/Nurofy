Nurofy: Custom AI Solutions for Businesses
Nurofy is a B2B web platform designed to showcase and deliver custom AI solutions, specializing in advanced neural networks and deep learning models tailored to the needs of businesses. The platform combines a sleek, modern frontend with a Flask-based backend for handling subscriptions and data management.

🚀 Features
Landing Page
Hero section introducing Nurofy’s mission and value proposition.

What We Do
Overview of the company’s AI services and B2B focus.

Model Showcase
Interactive model cards with embedded demos (e.g., Streamlit apps) that load via iframe.

Get a Quote
Contact form for businesses to request quotes (includes email and phone).

Email Subscription API

Validates email format

Limits submissions to 5 per IP

Ensures uniqueness

Stores email, IP address, and timestamp

Responds with success/failure message

Responsive Design
Fully optimized for desktop and mobile.

Custom Theming
Space-themed visuals and stylized UI for a professional, branded look.

🗂️ Project Structure
pgsql
Copy
Edit
Nurofy/
├── Website program/
│   ├── assets/
│   │   └── space_background.png
│   ├── index.html
│   ├── get-a-quote.html
│   ├── script.js
│   └── style.css
└── backend/
    ├── app.py
    └── .env
⚙️ Backend Overview
🔧 Technology Stack
Flask – Python web framework

Flask-MySQLdb – MySQL integration

Flask-CORS – CORS handling for frontend-backend communication

python-dotenv – Loads environment variables

MySQL – Stores subscriber information

📬 API: /subscribe (POST)
Accepts:

json
Copy
Edit
{
  "email": "user@example.com"
}
Validates:

Email format

Max 5 requests per IP

Unique email

Stores:

Email

IP address

Timestamp

Returns:

json
Copy
Edit
{
  "success": true,
  "message": "Thank you for subscribing!"
}
🧪 How to Run Locally
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/nurofy.git
cd nurofy
2. Set Up the Backend
Create and activate a virtual environment:

bash
Copy
Edit
cd backend
python -m venv venv
venv\Scripts\activate      # On Windows
# OR
source venv/bin/activate  # On Mac/Linux
Install dependencies:

bash
Copy
Edit
pip install flask flask-mysqldb flask-cors python-dotenv
Set up MySQL:

sql
Copy
Edit
CREATE DATABASE nurofy;
USE nurofy;
CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    ip_address VARCHAR(45),
    created_at DATETIME
);
Create .env file in /backend/:

env
Copy
Edit
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DB=nurofy
Run the backend:

bash
Copy
Edit
python app.py
Backend runs at: http://127.0.0.1:5000

3. Serve the Frontend
Open a new terminal:

bash
Copy
Edit
cd "Website program"
python -m http.server 8000
Frontend is available at: http://localhost:8000

🔗 Connecting Frontend to Backend
AJAX requests from http://localhost:8000 are allowed via CORS.

To use the /subscribe endpoint:

Add a form to index.html

Use JavaScript to POST to http://127.0.0.1:5000/subscribe

🎨 Customization
Model Cards
Update index.html iframe elements with your actual model demos and URLs.

Contact Info
Edit get-a-quote.html with your business email and phone number.

Branding
Modify style.css or replace space_background.png to match your brand identity.

🛠️ Troubleshooting
CORS Errors
Ensure backend is running and CORS is correctly configured.

Database Errors
Double-check MySQL credentials and table setup.

Port Conflicts
Make sure ports 5000 (backend) and 8000 (frontend) are free.

🤝 Contributing
Fork the repo

Create a branch: git checkout -b feature/your-feature

Commit changes: git commit -am 'Add new feature'

Push branch: git push origin feature/your-feature

Open a Pull Request

📄 License
MIT License – free to use and modify with attribution.
