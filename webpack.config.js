// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply Babel to all .js files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use Babel loader
                },
            },
        ],
    },
    resolve: {
        alias: {
            // litElement: path.resolve(__dirname, './node_modules/lit-element/lit-element.js')
            // Add more aliases as needed
        },
        // extensions: ['.js'],
        modules: [path.resolve(__dirname, './node_modules')],

    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
