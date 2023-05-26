import path from "path";
import { fileURLToPath } from "url";

import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function webpackConfig(env, argv) {
  const mode = argv.mode || "development";

  return {
    mode,
    devtool: mode === "development" ? "cheap-source-map" : false,
    entry: {
      index: "./index.ts",
    },
    output: {
      filename: "[name].js",
      publicPath: "",
      path: path.resolve(__dirname, "lib"),
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: [/node_modules\//],
          use: [
            {
              loader: "esbuild-loader",
              options: {
                target: "chrome103",
              },
            },
          ],
        },
      ],
    },
    stats: {
      builtAt: true,
      colors: true,
      entrypoints: false,
      hash: false,
      modules: false,
      publicPath: false,
      version: false,
    },
  };
}
