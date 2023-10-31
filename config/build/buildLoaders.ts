import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
		        loader: 'css-loader',
			    options: {
			        modules: {
			            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
			            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
			        }
			    }
			},
			'sass-loader'
        ]
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [svgLoader, fileLoader, cssLoader, typeScriptLoader]
}