import React from 'react';

const SvgGradients = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="teal-yellow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#facc15', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="teal-yellow-gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#facc15', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgGradients;