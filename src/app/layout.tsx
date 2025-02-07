import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

import "./global.scss";
import styles from "./styles.module.scss";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const url = "https://graphemecluster.github.io";
const title = "gf Tools 形素叢集.工具倉";
const description = "graphemecluster’s Tools Warehouse ぐらふぃーむの物置場";
const author = "@graphemecluster";
const locale = "zh-HK";

export const metadata: Metadata = {
	title: {
		default: title,
		template: `%s – ${title}`,
	},
	description,
	openGraph: {
		locale,
		url,
		siteName: title,
		description,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: author,
		creator: author,
	},
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-touch-icon.png",
		},
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return <html lang={locale}>
		<body>
			{/* "next/font/google" does not seem to work */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			{/* eslint-disable-next-line @next/next/no-page-custom-font -- See https://github.com/vercel/next.js/issues/55213 */}
			<link href="https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+HK:wght@100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet" />
			{/* eslint-disable-next-line @next/next/no-page-custom-font */}
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@500&text=AFIK&display=swap" rel="stylesheet" />
			<div className={styles["container"]}>
				<Header />
				<Navigation />
				<main className={styles["main"]}>{children}</main>
				<Footer />
			</div>
		</body>
	</html>;
}
