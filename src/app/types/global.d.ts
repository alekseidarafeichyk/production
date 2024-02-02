declare module '*.scss' {
	type IClassNames = Record<string, string>
	const classnames: IClassNames
	export = classnames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	export default content
}

declare const __IS__DEV__: boolean
declare const __BASE_URL__: string

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T
