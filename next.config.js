const path = require('path')

module.exports = {
  reactStrictMode: true,
  typescript: {
    // Make sure this path is correct based on your project structure
    tsconfigPath: './tsconfig.json',
    // Override the default behavior for JSX
    jsx: 'react',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}