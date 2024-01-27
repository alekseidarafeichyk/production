import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { type BuildOptions } from './types/config'

export function buildPlugins ({
    paths,
    isDev,
    baseUrl
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(isDev),
            __BASE_URL__: JSON.stringify(baseUrl)
        }),
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false })
        )
    }

    return plugins
}
