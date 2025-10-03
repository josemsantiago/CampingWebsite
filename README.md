# NuCamp - Camping Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.3-7952B3?logo=bootstrap)
![Parcel](https://img.shields.io/badge/Parcel-2.9.3-E9AB4F)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-success)

A responsive camping website featuring campsite information, weather integration, and reservation system. Built with modern web technologies including SCSS, Parcel, and OpenWeather API.

## Screenshots

> **Note:** Website screenshots will be added soon. Run `npm start` and open http://localhost:1234 to see the site in action.

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
   git clone https://github.com/josemsantiago/CampingWebsite.git
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

## Screenshots

> **Note:** Screenshots will be added soon. To see the website in action, follow the installation instructions above and run `npm start` to launch the development server at http://localhost:1234.

## Troubleshooting

### Common Issues

**Issue:** OpenWeather API returns authentication error

**Solution:** Verify your `.env` file contains a valid `OPENWEATHER_API_KEY`. You can obtain a free API key at https://openweathermap.org/api

---

**Issue:** Build fails with "Module not found" error

**Solution:** Delete `node_modules` and `.parcel-cache` folders, then run `npm install` again. Ensure you're using Node.js 14+ and npm 6+.

---

**Issue:** Images not displaying correctly

**Solution:** Verify that all image files are present in the `img/` directory. Check that image paths in HTML files are relative paths (e.g., `./img/logo.png`).

---

**Issue:** Form submissions not working

**Solution:** Check browser console for errors. Ensure the NuCamp Form API endpoint is accessible. Test your internet connection.

---

**Issue:** Weather widget shows "Error loading weather data"

**Solution:** Confirm API key is valid and not rate-limited. OpenWeather free tier allows 60 calls/minute and 1,000,000 calls/month.

For additional help, please open an issue on the GitHub repository or check the [Parcel documentation](https://parceljs.org/docs/).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

**Code Style Guidelines:**
- Follow consistent indentation (2 spaces for HTML/CSS/JS)
- Use semantic HTML5 elements
- Organize SCSS files with modular components
- Comment complex JavaScript logic
- Test responsive design on mobile and desktop

## Contact & Support

- **Author**: José Santiago Echevarria
- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/josemsantiago/CampingWebsite/issues)
- **Project Type**: Educational web development project demonstrating modern frontend technologies and API integration
- **Learning Resources**: This project demonstrates NuCamp Full Stack Bootcamp concepts including Bootstrap 5, SCSS preprocessing, and RESTful API integration

## Author

Created as a web development learning project demonstrating modern frontend technologies and API integration.
