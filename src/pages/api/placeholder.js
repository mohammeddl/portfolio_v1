export default function handler(req, res) {
  // Set the width and height from the query
  const width = parseInt(req.query.w, 10) || 800;
  const height = parseInt(req.query.h, 10) || 600;
  
  // Create a simple placeholder image using SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#f0f0f0" />
      <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#ccc" stroke-width="4" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#999" text-anchor="middle" dominant-baseline="middle">
        ${width} × ${height}
      </text>
      <text x="50%" y="calc(50% + 30px)" font-family="Arial, sans-serif" font-size="16" fill="#999" text-anchor="middle" dominant-baseline="middle">
        Project Screenshot
      </text>
    </svg>
  `;
  
  // Set the appropriate headers
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  
  // Send the SVG as the response
  res.status(200).send(svg);
}