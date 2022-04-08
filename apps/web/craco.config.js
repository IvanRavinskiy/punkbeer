const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

require("dotenv").config({
    path: path.join(process.cwd(), "..", "..", ".env")
});

module.exports = process.env;

const packages = [];
packages.push(path.join(__dirname, "../../components"));

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const { isFound, match } = getLoader(
                webpackConfig,
                loaderByName("babel-loader")
            );
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];

                match.loader.include = include.concat(packages);
            }
            return webpackConfig;
        }
    }
};
