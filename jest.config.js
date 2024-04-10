module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-environment-jsdom'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest' // Add this line
  },
  transformIgnorePatterns: [
    "/node_modules/"   // Ignore files inside node_modules directory
  ],
  moduleDirectories: [
    'node_modules', // Default node_modules directory
    'app'
  ],
  testMatch: [
    '**/*.spec.js', // Example: Run tests for a specific file
  ],
  // setupFilesAfterEnv: ['./jest.setup.js'], // Path to your setup file
};