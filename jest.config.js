module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    '/node_modules/(?!graphviz-react)'
  ],
  transform: {
'^.+\\.(ts|tsx|js)$': 'ts-jest'
  }
}
