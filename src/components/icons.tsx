import { forwardRef } from "react";

import type { RemixiconComponentType } from "@remixicon/react";

export const Qiita: RemixiconComponentType = forwardRef(function Qiita({ color = "currentColor", size, ...rest }, ref) {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill={color} width={size} height={size} ref={ref} {...rest}>
		<path d="M200 0C89.543 0 0 89.544 0 200c0 110.457 89.543 200 200 200 56.64 0 107.775-23.55 144.164-61.387-6.383-.957-12.91-3.437-19.111-7.57-11.908-7.939-22.477-15.438-28.028-27.898-21.574 23.01-50.887 30.58-86.37 34.17-71.85 7.265-134.093-24.822-141.632-104.993-3.204-34.082 4.38-66.482 19.674-93.033l-8.904-35.016c-1.437-6.086 4.164-11.877 10.096-10.437l30.76 7.467c18.29-15.019 40.414-24.833 64.82-27.301 20.876-2.11 41.116 1.391 59.517 9.375l28.912-17.49c5.442-3.291 12.332.429 12.852 6.94l1.666 41.245v.002c22.235 23.474 37.374 55.532 40.797 91.936 1.933 20.562-.2 36.292-5.65 51.299-2.552 7.024-3.32 12.963 1.292 18.841 4.456 5.68 11.525 16.71 19.407 14.862 11.845-2.778 24.53-2.039 32.37 2.857C391.542 265.876 400 233.93 400 200 400 89.544 310.457 0 200 0zm-1.21 95.451a90.001 90.001 0 0 0-10.245.453c-36.807 3.722-65.952 30.225-74.895 64.14l-21.959-3.325-.234 4.314 21.621 2.346c-.587 2.495-1.07 3.973-1.433 6.537l-18.866 1.504.172 3.375 18.387-1.467c-.324 2.855-.517 4.69-.553 7.61l-16.797 6.867.824 4.164 15.997-7.487c.037 2.231.133 3.42.345 5.678 4.446 47.285 43.941 56.635 91.13 51.863 47.186-4.772 84.195-21.857 79.75-69.142-.215-2.27-.541-3.448-.923-5.654l17.328 3.761.405-3.816-18.176-3.45c-.57-2.811-1.275-4.518-2.107-7.212l18.68-2.29-.264-3.365-19.165 2.348a84.922 84.922 0 0 0-2.775-7.098l21.108-6.736-.663-4.226-22.45 7.777c-13.649-28.613-41.67-47.04-74.243-47.469z" />
	</svg>;
});

export const Migdal: RemixiconComponentType = forwardRef(function Migdal({ color = "currentColor", size, ...rest }, ref) {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" fill={color} width={size} height={size} ref={ref} {...rest}>
		<path d="M0 350a350 350 180 0 0 700 0a350 350 180 0 0-700 0m565-47v146h-41.8l-1.2-10c-.7-5.5-1.6-10-2-10-.3 0-2.6 2-5 4.5-14.3 14.5-34.9 21.3-62 20.2-15.6-.6-22.3-2.2-33.7-7.8-18.9-9.2-31-26.7-36.2-52.6-4.2-20.7-5.2-56-2.1-77.7 3.5-24.1 13.9-44.9 28.9-57.2 25.3-20.9 68.9-23.9 100.8-7l6.3 3.4V157h48v146zm-299.5-60c18 3.1 42.6 11.4 52.1 17.6l2.5 1.7-.4 96.6c-.4 84.6-.6 97.7-2.1 105.1-8.5 43.7-31.5 68.3-72.1 77.2-4 .9-13.5 1.3-28.5 1.3-28.4-.1-44.2-2.1-65.5-8.6-5.5-1.7-10.2-3.2-10.3-3.4-.2-.2 1.3-8.3 3.4-18 3.8-17.6 3.8-17.7 6.4-17.2 1.4.3 7.5 1.7 13.5 3.1 17.4 4.1 34.8 5.9 51.5 5.3 26.3-.9 39.4-7.8 47.5-25 5.5-11.6 6.7-17.5 7.2-35.7l.5-16.5-4.1 3.8c-11.1 10-25.4 15.9-43.5 17.7-30.3 3.1-56.3-5.9-70.3-24.4-13.1-17.3-18.3-39.5-18.3-77.9.1-29.7 2.4-43.5 10-59.4 13.1-27.2 37.5-41.7 76.5-45.7 8-.8 33.3.6 44 2.4zM465 278.6c-19.3 3.7-29 13.5-34.2 34.1-2 8-2.2 11.2-2.2 34.8.1 28.6 1.1 36.5 6 47.5 3.5 7.8 11 15 18.9 17.9 11.7 4.4 31.1 3.7 42-1.4 6.5-3.1 12.9-9.9 16.1-17.1 4.7-10.6 5.4-19.1 5.4-64.4v-41.7l-6.8-3.1c-11.8-5.2-16.8-6.4-30.2-6.7-6.9-.2-13.6-.1-15 .1zM217.4 279.4c-16.6 3.8-26.1 13.2-31.1 30.7-1.5 5.5-1.8 10.3-1.8 34.4 0 30.6.6 35.6 5.6 46.2 3.6 7.5 10 13.4 17.8 16.3 10.8 4.1 30.3 3.6 40.8-1 6-2.6 13.1-9.6 16.3-16.1 5.5-10.8 6.1-17 5.8-62.9l-.3-41.5-3.8-1.8c-7.4-3.5-15.1-4.9-29.2-5.3-9.7-.2-15.9.1-20.1 1z" />
	</svg>;
});

export const TypeScriptFill: RemixiconComponentType = forwardRef(function TypeScriptFill({ color = "currentColor", size, ...rest }, ref) {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={color} width={size} height={size} ref={ref} {...rest}>
		<path d="M50 0h412a50 50 0 0 1 50 50v412a50 50 0 0 1-50 50h-412a50 50 0 0 1-50-50v-412a50 50 0 0 1 50-50M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" />
	</svg>;
});

export const TypeScriptLine: RemixiconComponentType = forwardRef(function TypeScriptLine({ color = "currentColor", size, ...rest }, ref) {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" fill={color} width={size} height={size} ref={ref} {...rest}>
		<path d="M100 0h412a100 100 0 0 1 100 100v412a100 100 0 0 1-100 100h-412a100 100 0 0 1-100-100v-412a100 100 0 0 1 100-100M100 50a50 50 0 0 0-50 50v412a50 50 0 0 0 50 50h412a50 50 0 0 0 50-50v-412a50 50 0 0 0-50-50zM366.939 457.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" />
	</svg>;
});