import path from 'path'
import webpack from 'webpack'
import { type RuleSetRule } from 'webpack'
import { type WebpackConfiguration } from 'webpack-dev-server'

import buildCssLoader from '../build/loaders/buildCssLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }): WebpackConfiguration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    if (config.resolve?.modules) {
        config.resolve.modules.push(paths.src)
    }

    if (config.resolve?.extensions) {
        config.resolve.extensions.push('.ts', '.tsx')
    }

    if (config.module?.rules) {
        // @ts-expect-error
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule?.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.module.rules.push(buildCssLoader(true))
    }

    if (config.plugins) {
        config.plugins.push(new webpack.DefinePlugin({
            __IS__DEV__: true,
            __BASE_URL__: ''
        }),)
    }

    return config
}
