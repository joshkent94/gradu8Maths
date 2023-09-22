import * as path from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { merge } from 'webpack-merge'
import { GhostProgressPlugin } from 'ghost-progress-webpack-plugin'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import 'dotenv/config'

type Mode = 'development' | 'production' | 'none'

const devServer: DevServerConfiguration = {
    port: 3000,
    client: {
        logging: 'error',
    },
    open: {
        app: {
            name: 'arc',
        },
    },
}

const commonConfig = (mode: Mode): Configuration => ({
    mode,
    entry: {
        index: path.resolve('src/index.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                type: 'assets/resource',
                test: /\.(woff|woff2|tff|eot|svg)$/,
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
        }),
        new GhostProgressPlugin(),
        new DefinePlugin({
            'process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY': JSON.stringify(
                process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
            ),
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin()],
    },
    output: {
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    // stats: 'errors-only',
    stats: 'summary',
})

const devConfig = (): Configuration => ({
    devtool: 'cheap-module-source-map',
    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    devServer,
})

const prodConfig = (): Configuration => ({
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('public'),
                    to: path.resolve('build'),
                },
            ],
        }),
    ],
    output: {
        path: path.join(__dirname, 'build'),
    },
})

const config = (_env: any, args: any): Configuration => {
    try {
        const { mode } = args
        const common = commonConfig(mode)

        if (mode === 'development') {
            return merge(common, devConfig())
        }

        return merge(common, prodConfig())
    } catch (error) {
        console.error(error.message)
    }
}

export default config
