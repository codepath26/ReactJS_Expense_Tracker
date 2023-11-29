// Instead of exporting an anonymous object directly
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  transform: {},
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".js", ".jsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
