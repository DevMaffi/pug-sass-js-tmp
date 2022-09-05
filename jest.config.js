const config = {
  moduleNameMapper: {
    // images
    '\\.(woff|woff2|gif|ico|jpg|jpeg|png|svg|webp|ogg|mp3|wav|mpg|mpeg)$':
      '<rootDir>/config/__mocks__/fileMock.js',

    // styles
    '\\.(css|sass|scss)$': 'identity-obj-proxy',

    // aliases
    '^@$': '<rootDir>/index.js',
    '^@classes$': '<rootDir>/src/assets/js/model/classes/index.js',
    '^@common$': '<rootDir>/src/assets/js/modules/common/index.js',
    '^@files/(.*)$': '<rootDir>/src/assets/files/$1',
    '^@i18n$': '<rootDir>/src/assets/js/i18n/index.js',
    '^@img/(.*)$': '<rootDir>/src/assets/images/$1',
    '^@model$': '<rootDir>/src/assets/js/model/index.js',
    '^@modules$': '<rootDir>/src/assets/js/modules/index.js',
    '^@sass/(.*)$': '<rootDir>/src/assets/sass/$1',
    '^@services$': '<rootDir>/src/assets/js/services/index.js',
    '^@svg/(.*)$': '<rootDir>/src/assets/svg/$1',
    '^@utils$': '<rootDir>/src/assets/js/utils/index.js',
  },
}

export default config
