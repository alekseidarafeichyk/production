type Mods = Record<string, boolean | string>

export function classNames (
    mainClass: string,
    mods: Mods = {},
    additionalCls: string[] = []
): string {
    return [
        mainClass,
        ...additionalCls.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}
