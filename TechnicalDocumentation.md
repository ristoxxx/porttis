# Technical Documentation

## File Structure

```
portfolio/
├── index.html             # Main landing page
├── certificates.html      # Certificates display page
├── header.html            # Shared header component
├── footer.html            # Shared footer component
├── scripts/
│   ├── include.js         # Component loader
│   ├── repos.js           # GitHub repository fetcher
│   └── certificates.js    # Certificate display manager
├── layout/
│   └── styles/
│       ├── layout.css     # Main stylesheet
│       └── modal.css      # Modal styles for certificates
└── images/
    ├── my/
    │   └── Profiilikuva.jpg  # Profile picture
    └── certs/
        └── [certificate images]
```

## Component Integration

The site uses a component-based approach with `include.js` to load the header and footer on each page. This approach:
- Maintains consistency across pages
- Simplifies maintenance (changes only need to be made in one place)
- Improves page load performance

```javascript
// include.js
function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(content => {
      document.querySelector(selector).innerHTML = content;
    })
    .catch(error => console.error(error));
}
```

## GitHub Integration

The `repos.js` file fetches repository data directly from GitHub using raw file access:

1. Maintains a list of featured repositories
2. Fetches the README.md for each repository
3. Parses the title and description
4. Creates HTML cards for each project

```javascript
// Example from repos.js
const apiUrl = `https://raw.githubusercontent.com/${owner}/${repoName}/${branch}/README.md`;
// ...
const response = await fetch(apiUrl, {
  headers: { Accept: 'application/vnd.github.v3.raw' }
});
const readmeContent = await response.text();
```

## Certificate Display System

The certificates page uses a modal system to display certificates:

1. Loads certificate images from a predefined list
2. Creates a responsive grid layout
3. Implements a modal viewer for detailed examination

```javascript
// From certificates.js
img.addEventListener('click', function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = title;
});
```

## Responsive Design

The site uses a combination of:
- Percentage-based widths
- Media queries (in CSS)
- Flexible grid layouts

## Performance Considerations

1. Asynchronous loading of components
2. Error handling for failed fetches
3. Image optimization for faster loading
