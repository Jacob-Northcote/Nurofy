Nurofy Website: AI Solutions in a Cosmic Design
The Nurofy Website project delivers a modern, scalable, and visually captivating online presence for Nurofy, a leading AI solutions provider. This dynamic website blends cutting-edge technology with an immersive space-themed aesthetic, ensuring an engaging user experience from the moment visitors arrive.

Key Features
Celestial Aesthetics: A striking space-themed design, featuring a starry header and expansive cosmic background, immediately conveys a futuristic and innovative brand identity.

Impactful Hero Section: The homepage boasts a prominent, outlined "Nurofy" title set against a visually stunning backdrop, creating a memorable first impression.

Intuitive Navigation: A sleek navigation bar provides seamless access to key sections: "What We Do," "View Models," and a dedicated "Get a Quote" page, ensuring smooth user flow.

Clear Service Overview: The "What We Do" section presents a prominent heading and detailed descriptions of Nurofy's AI services, designed with clear separation from the background for optimal readability.

Expandable Model Showcase: The "Models" section features vertically stacked "model cards," each with a placeholder image and description. This modular design allows for easy expansion as Nurofy's AI portfolio grows.

Dedicated Quote Page: A separate, scalable "Get a Quote" page offers a clear call to action, contact information, and a convenient "Home" button for effortless navigation back to the main site.

Responsive and Scalable Architecture: Engineered with responsive design principles, the website and its components adapt flawlessly to all devices, from desktops to mobile phones. Its scalable layout ensures effortless integration of future features and content.

Project Structure
Website program/
├── assets/
│   └── space_background.png
├── index.html
├── get-a-quote.html
├── script.js
└── style.css
Getting Started
To explore the Nurofy website locally, follow these simple steps:

Clone the repository:

Bash

git clone https://github.com/yourusername/nurofy-website.git
Navigate to the project directory:

Bash

cd nurofy-website
Open the homepage:
Open index.html in your preferred web browser.

Once open, utilize the navigation bar to:

"What we do": Scroll directly to the services section.

"View Models": Jump to the AI model showcase.

"Get a Quote": Access the dedicated contact page. From the quote page, click the "Home" button to return to the homepage.

Customization
The Nurofy website is designed for easy modification:

Add/Update Models: Modify the .iframe-wrapper section within index.html to add new model cards or update existing images and text descriptions.

Change Contact Information: Edit the contact details directly in get-a-quote.html.

Update Styles: Adjust the visual appearance, including colors, fonts, spacing, and layout, by modifying style.css.

Replace Placeholder Images: Update the src attribute within the <img> tags for model cards with your own imagery.

Technologies Used
HTML5: For semantic structure and content organization.

CSS3: Leverages Flexbox for flexible layouts and Responsive Design principles for optimal viewing across devices.

JavaScript: Included for future interactive elements (currently, no JavaScript is required for core functionality).

# Backend Email Subscription System

## MySQL Table Creation

Run this SQL to create your table:

```sql
CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    ip_address VARCHAR(45) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

Set these in your environment or a `.env` file:
- `MYSQL_HOST` (e.g., localhost or your cloud DB host)
- `MYSQL_USER` (your MySQL username)
- `MYSQL_PASSWORD` (your MySQL password)
- `MYSQL_DB` (your database name)
- `RECAPTCHA_SECRET_KEY` (from Google reCAPTCHA)

## Flask App Setup

1. Install dependencies:
   ```bash
   pip install flask flask-mysqldb flask-cors requests python-dotenv
   ```
2. Set up your `.env` file with the variables above.
3. Run the Flask app:
   ```bash
   python backend/app.py
   ```

## Deployment

- For **PythonAnywhere**: Upload your files, set environment variables, and configure your web app to run `backend/app.py`.
- For **Heroku**: Push your code, set config vars, and add a MySQL add-on or connect to an external MySQL instance.

See the code in `backend/app.py` for details.

