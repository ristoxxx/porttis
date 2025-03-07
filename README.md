# Portfolio Website

A responsive personal portfolio website showcasing my skills, recent projects, and certificates.

## Overview

This portfolio website is built using HTML, CSS, and JavaScript. It features:
- A clean, responsive design
- GitHub repository integration to automatically display latest projects
- Certificate showcase with modal viewing
- Contact information and personal introduction

## Structure

The website consists of:

- **Main Page** (`index.html`): Landing page with introduction, skills, and latest GitHub projects
- **Certificates Page** (`certificates.html`): Displays professional certificates and achievements
- **Shared Components**: 
  - Header (`header.html`): Navigation and site title
  - Footer (`footer.html`): Contact information and personal bio

## My improvements over original template

### Dynamic GitHub Repository Display

The site automatically fetches and displays my latest GitHub repositories using the GitHub API. For each project, it:
- Extracts the project title and description from the README.md
- Displays an associated screenshot
- Links to the GitHub repository

### Certificate Showcase

The certificates page displays my professional certifications with:
- Modal view for detailed examination of certificates

## Technical Implementation

### JavaScript Files

- **repos.js**: Fetches and displays GitHub repositories on the main page
- **certificates.js**: Manages the certificate display and modal functionality
- **include.js**: Handles the loading of shared components (header and footer)

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub API for project integration
Technical documentation can be found from [here](./TechnicalDocumentation.md)

## Local Development

To run this site locally:

1. Clone the repository
2. Open `index.html` in your browser

## Future Enhancements

- Add a contact form
- Implement dark/light mode toggle
- Add project filtering capabilities
- Enhance mobile responsiveness

## Credits

- Template base by [OS Templates](http://www.os-templates.com/)
- Modified and enhanced by Risto Lähteenkorva

## License

Copyright © 2024 - All Rights Reserved - Risto Lähteenkorva
