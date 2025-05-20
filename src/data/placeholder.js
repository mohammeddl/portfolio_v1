export default function handler(req, res) {
  const width = parseInt(req.query.w, 10) || 800;
  const height = parseInt(req.query.h, 10) || 600;
  
  const text = req.query.text || `${width} × ${height}`;
  const projectName = req.query.project || 'Project Screenshot';
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#ccc" stroke-width="4" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#555" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
      <text x="50%" y="calc(50% + 30px)" font-family="Arial, sans-serif" font-size="16" fill="#777" text-anchor="middle" dominant-baseline="middle">
        ${projectName}
      </text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  
  // Send the SVG as the response
  res.status(200).send(svg);
}