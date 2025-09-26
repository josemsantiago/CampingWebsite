# NuCamp - Camping Website

A responsive camping website featuring campsite information, weather integration, and reservation system. Built with modern web technologies including SCSS, Parcel, and OpenWeather API.

## Overview

The NuCamp website is a fictional camping review platform that showcases various campsite locations with detailed information, real-time weather data, and reservation capabilities. The project demonstrates modern web development practices including responsive design, API integration, and build tool usage.

## Features

### Core Functionality
- **Campsite Showcase**: Interactive carousel displaying featured camping locations
- **Real-time Weather**: Live weather data from OpenWeather API for San Francisco
- **Reservation System**: Modal-based campsite reservation forms
- **User Authentication**: Login modal with form validation
- **Responsive Design**: Mobile-first approach using Bootstrap 5

### Pages
- **Homepage (index.html)**: Featured campsites, weather widget, testimonials
- **About Us (aboutus.html)**: Company information, community partners, statistics
- **Contact (contactus.html)**: Contact form and business information

### Interactive Elements
- Bootstrap carousel with play/pause controls
- Modal dialogs for login and reservations
- Weather widget with live API data
- Form submissions to cloud endpoints
- Responsive navigation with FontAwesome icons

## Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **SCSS**: Modular styling with Sass preprocessing
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Bootstrap 5.2.3**: Responsive framework
- **FontAwesome 6.2.1**: Icon library

### Build Tools
- **Parcel 2.9.3**: Build tool and development server
- **@parcel/transformer-sass 2.9.3**: SCSS compilation

### External APIs
- **OpenWeather API**: Real-time weather data integration
- **NuCamp Form API**: Cloud-based form processing

## Project Structure

```
CampingWebsite/
├── index.html              # Main homepage
├── aboutus.html            # About page
├── contactus.html          # Contact form page
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables (API keys)
├── .gitignore             # Git ignore rules
├── css/                    # SCSS stylesheets
│   ├── styles.scss         # Main stylesheet
│   ├── _modal.scss         # Modal component styles
│   ├── _review-section.scss # Review section styles
│   └── _weather.scss       # Weather widget styles
├── js/
│   └── scripts.js          # Main JavaScript functionality
└── img/                    # Image assets
    ├── logo.png
    ├── *-lake.jpg & thumbnails
    └── breadcrumb-trail.jpg
```

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd CampingWebsite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create `.env` file in project root
   - Add your OpenWeather API key:
     ```
     OPENWEATHER_API_KEY=your_api_key_here
     ```

4. **Start development server**:
   ```bash
   npm start
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Features Detail

### Weather Integration
- Fetches current weather for San Francisco
- Displays temperature, weather icon, and description
- Error handling for API failures
- API key stored in environment variables

### Responsive Design
- Mobile-first approach with Bootstrap grid
- Responsive navigation menu
- Optimized images with thumbnails
- Touch-friendly interface elements

### Form Processing
- Contact form submission to cloud endpoint
- Reservation forms with validation
- Success/error feedback for users
- Secure form data transmission

## Dependencies

### Production
- **bootstrap**: ^5.2.3 - UI framework
- **@fortawesome/fontawesome-free**: ^6.2.1 - Icons

### Development
- **parcel**: ^2.9.3 - Build tool and dev server
- **@parcel/transformer-sass**: ^2.9.3 - SCSS compilation

## Browser Support

- Modern browsers supporting ES6+
- Responsive design for mobile and desktop
- Progressive enhancement approach

## API Integration

### OpenWeather API
- Current weather data for specified locations
- Temperature and weather condition display
- Error handling for network issues
- Rate limiting considerations

## Security Considerations

- Environment variables for API keys
- HTTPS enforcement for external APIs
- Form data validation
- XSS protection through proper output encoding

## Future Enhancements

- User account system with authentication
- Campsite booking calendar
- Photo gallery with user uploads
- Review and rating system
- Advanced search and filtering
- Mobile app development

## Learning Objectives

This project demonstrates:
- Modern web development workflow
- API integration and error handling
- Responsive design principles
- Build tool configuration (Parcel)
- SCSS preprocessing and organization
- Bootstrap framework usage
- JavaScript ES6+ features

## Author

Created as a web development learning project demonstrating modern frontend technologies and API integration.
