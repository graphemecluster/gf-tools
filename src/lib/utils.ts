export function range<T>(length: number, callback: (index: number) => T): T[] {
	return Array.from({ length }, (_, index) => callback(index));
}

export function getStyles<T extends Record<string, string>>(styles: T, classes: readonly (keyof T | false | null | undefined)[]) {
	return classes.flatMap(className => className ? [styles[className]] : []).join(" ");
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] & {} };
