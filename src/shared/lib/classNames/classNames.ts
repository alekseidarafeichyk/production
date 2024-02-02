export type Mods = Record<string, boolean | string | undefined>

export function classNames (
    mainClass: string,
    mods: Mods = {},
    additionalCls: Array<string | undefined> = []
): string {
    return [
        mainClass,
        ...additionalCls.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}
