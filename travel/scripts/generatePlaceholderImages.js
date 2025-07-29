const fs = require('fs');
const path = require('path');

const destinations = {
  relax: ['hakone', 'yufuin', 'ibusuki'],
  active: ['hakuba', 'yakushima', 'izu-oshima'],
  urban: ['tokyo', 'osaka', 'yokohama'],
  nature: ['kamikochi', 'shiretoko', 'biei'],
  culture: ['kyoto', 'kanazawa', 'nara'],
  photogenic: ['naoshima', 'kamakura', 'setouchi']
};

const colors = {
  relax: ['#60A5FA', '#93C5FD'],
  active: ['#F87171', '#FCA5A5'],
  urban: ['#A78BFA', '#C4B5FD'],
  nature: ['#34D399', '#6EE7B7'],
  culture: ['#FBBF24', '#FCD34D'],
  photogenic: ['#F472B6', '#F9A8D4']
};

function createSvgPlaceholder(title, category) {
  const [color1, color2] = colors[category];
  const capitalizedTitle = title.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad1)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${capitalizedTitle}</text>
</svg>`;
}

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
Object.entries(destinations).forEach(([category, places]) => {
  places.forEach(place => {
    const svg = createSvgPlaceholder(place, category);
    const filename = `${place}.jpg`;
    const filepath = path.join(imagesDir, filename);
    
    // Create a simple placeholder file (we'll use SVG as JPG for now)
    fs.writeFileSync(filepath.replace('.jpg', '.svg'), svg);
    console.log(`Created placeholder for ${place}`);
  });
});

console.log('All placeholder images created successfully!');