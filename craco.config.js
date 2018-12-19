// const { injectBabelPlugin } = require("react-app-rewired");

// module.exports = function override(config, env) {
//   config = injectBabelPlugin(
//     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
//     config
//   );
//   return config;
// };

module.exports = function({ env, paths }) {
  return {
    babel: {
      presets: [],
      plugins: [ ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]],
      loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
      loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
  },
  };
}