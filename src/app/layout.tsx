import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { fonts } from "@/lib/consts";

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
		<body className={Object.values(fonts).map(({ className }) => className).join(" ")}>
			<div className={styles["container"]}>
				<Header />
				<Navigation />
				<main className={styles["main"]}>{children}</main>
				<Footer />
			</div>
		</body>
	</html>;
}
