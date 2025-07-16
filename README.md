Nurofy Website
A modern, scalable, and visually engaging website for Nurofy, an AI solutions provider. This project features a space-themed homepage, smooth navigation, a scalable quote/contact page, and a clean, responsive layout designed for easy expansion.
Features
Space-Themed Design:
Starry header and space background for a futuristic, tech-forward look.
Hero Section:
Large, outlined “Nurofy” title with a visually striking background.
Smooth Navigation:
Navigation bar with buttons to scroll to “What We Do,” “View Models,” and a dedicated “Get a Quote” page.
What We Do Section:
Prominent heading and detailed description of Nurofy’s AI services, with clear separation from the background for readability.
Models Section:
Vertically stacked model cards, each with a placeholder image and description, easily expandable for more models.
Get a Quote Page:
Separate, scalable page with a large heading, contact information, and a Home button for easy navigation.
Responsive & Scalable:
Layout and components are designed to look great on all devices and are easy to build on for future features.
File Layout
Website program/
├── assets/
│   └── space_background.png
├── index.html
├── get-a-quote.html
├── script.js
└── style.css
Usage
   git clone https://github.com/yourusername/nurofy-website.git
   cd nurofy-website
Open index.html in your browser to view the homepage.
Navigate using the navbar:
What we do: Scrolls to the “What We Do” section.
View Models: Scrolls to the models/cards section.
Get a Quote: Opens the dedicated quote/contact page.
Get a Quote Page:
Displays contact information and a call to action.
“Home” button returns to the homepage.
Customization
Add/Update Models:
Edit the .iframe-wrapper section in index.html to add more cards or update images/text.
Change Contact Info:
Edit the contact details in get-a-quote.html.
Update Styles:
Modify style.css for colors, fonts, spacing, and layout.
Replace Placeholder Images:
Update the src attribute in the card <img> tags with your own images.
Technologies Used
HTML5
CSS3 (Flexbox, Responsive Design)
JavaScript (for future interactivity, currently not required)
