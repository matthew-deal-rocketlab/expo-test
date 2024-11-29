const path = require("path");

module.exports = {
  entry: "./app/trip-planner/web-entry.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "trip-planner-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
};
