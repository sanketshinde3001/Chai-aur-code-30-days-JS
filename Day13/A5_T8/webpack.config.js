const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    mode: 'development' // Mode can be 'development' or 'production'
};
