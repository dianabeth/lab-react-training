import React from 'react';
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb( ${r}, ${g}, ${b})`;
  const hexColor = rgbToHex(r, g, b);
  const textColor = r + g + b > (255 * 3) / 2 ? 'black' : 'white';
  return (
    <div style={{ backgroundColor: rgbColor, color: textColor }}>
      {rgbColor}
      <br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
