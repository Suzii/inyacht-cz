module.exports = {
    watch: true,
    cache: true,
    entry: {
        // client: "./src/js/index.ts",
        server: "./src/server/index.ts"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/js"
    },

    devtool: "inline-source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    },

    node: {
        fs: "empty"
    }
};
