const webpack = require("webpack");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    // ... other webpack configurations
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isDevelopment ? "development" : "production"
        ),
      }),
    ],
  };
};
