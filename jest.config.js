module.exports = {
    roots: ["<rootDir>/src"],
    moduleFileExtensions: [
        "js",
        "jsx"
    ],
    transform: {
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: [
      "<rootDir>/src/setupEnzyme.js"

    ]
}
