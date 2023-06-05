import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const srcFolder  = '/Users/Business/Server/dv01.com/src';
const distFolder = '/Users/Business/Server/dv01.com/public/dist';

const Start = (env = {}) => {
    console.log('Starting webpack, settings ...', env, '\n');

    return {
        mode: 'development',
        stats: 'minimal',
        devtool: 'source-map',
        entry: {
            start: './src/start.js'
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        output: {
            publicPath: (env.local) ? '/dist/' : `/dist/${env.release}/`,
            path: distFolder,
            filename: '[name].min.js',
            chunkFilename: '[chunkhash].min.js'
        },
        resolve: {
            alias: {
                src: srcFolder
            }
        },
        module: {
            rules: [
                { 
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [
                                ['@babel/plugin-proposal-decorators', {
                                    'legacy': true
                                }],
                                ["@babel/plugin-proposal-class-properties", {
                                    "loose": true
                                }],
                                ["@babel/plugin-proposal-private-methods", {
                                    "loose": true
                                }]
                            ],
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                { test: /\.css$/, use: 'css-loader?url=false' },
                { test: /\.ts$/, use: 'ts-loader' },
                {
                    test: /\.scss$/,
                    enforce: 'pre',
                    use: [ 'style-loader', "css-loader", "sass-loader", "source-map-loader" ]
                },
                {
                    test: /\.png$/,
                    loader: "url-loader"
                },
                {
                    test: /\.jpg$/,
                    loader: "file-loader"
                },
                {
                    test: /\.gif$/,
                    loader: "file-loader"
                },
                {
                    test: /\.svg$/,
                    loader: "file-loader"
                },
                {
                    test: /\.ico$/,
                    loader: "file-loader"
                },
                {
                    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                    loader: 'url-loader'
                },
            ]
        }
    }
};

export default Start;