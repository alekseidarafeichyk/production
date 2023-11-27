import { type Configuration } from 'webpack-dev-server'

import { type BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): Configuration {
    const { port } = options

    return {
        open: true,
        port,
        hot: true,
    }
}
