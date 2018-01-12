
import {join} from 'path';

const include = join(__dirname, 'src');

export default {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'pisgah'
    },
    devtool: "source-map",
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include,
                query: {
                    presets: ['es2015','react', 'stage-0']
                }
            }
        ]
    }
};