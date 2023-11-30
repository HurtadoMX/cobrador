module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
        port: 8082,
      },
    }),
  },
  externals: ["stream", "querystring", "events", "child_process"],
};