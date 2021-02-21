module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next|)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@/other/(.*)': '<rootDir>/other/$1',
    '@/test/(.*)': '<rootDir>/test/$1',
    '@/src/(.*)': '<rootDir>/src/$1',
    '@/db/(.*)': '<rootDir>/db/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/other/setupTests.ts']
};
