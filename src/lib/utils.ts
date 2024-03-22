export function getStyles<T extends Record<string, string>>(styles: T, classes: readonly (keyof T | false | null | undefined)[]) {
	return classes.flatMap(className => className ? [styles[className]] : []).join(" ");
}
