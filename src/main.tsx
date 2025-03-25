
// This file is needed for the build process to work
// but we're using traditional HTML/CSS/JS for this project
// The actual entry point is index.html

// For compatibility purposes
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = '<p>Loading...</p>';
}

// The main application is loaded through index.html
