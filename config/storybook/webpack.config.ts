import path from 'path'
import webpack from 'webpack'
import { type RuleSetRule } from 'webpack'

import buildCssLoader from '../build/loaders/buildCssLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }): any => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(new webpack.DefinePlugin({
        __IS__DEV__: true
    }),)

    return config
}
