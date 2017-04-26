const { source } = require('common-tags');
module.exports.handler = ({ queryStringParameters }, context, callback) => {
  const {
    text = 'hello', fill = 'f1f8ff', color = '0366d6', size = '1.5em', weight = 'normal',
    font = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  } = queryStringParameters || {};
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type':'image/svg+xml' },
    body: source`
      <?xml version="1.0" encoding="utf-8"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet">
        <style type="text/css">
          svg { background: #${fill.replace(/#/, '')}; }
          text {
            fill: #${color.replace(/#/, '')};
            font-family: ${font};
            font-size: ${size};
            font-weight: ${weight};
            alignment-baseline: middle;
            text-anchor: middle;
          }
        </style>
        <text>${text}</text>
      </svg>
    `
  });
};
