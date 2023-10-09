import webpack from "webpack";
import { buildWebpackConfig } from "./build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./build/types/config";
import path from "path";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const port = env.port || 3000;

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "dist"),
		html: path.resolve(__dirname, "public", "index.html"),
	};

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	});

	return config;
};
