import { RiArticleFill, RiHomeSmileFill, RiInformation2Fill, RiToolsFill } from "@remixicon/react";
import { Cantarell, Noto_Sans_HK } from "next/font/google";

import type { RemixiconComponentType } from "@remixicon/react";

const cantarell = Cantarell({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin", "latin-ext"],
	display: "swap",
	variable: "--font-cantarell",
});
const notoSansHK = Noto_Sans_HK({
	weight: ["400", "700"],
	subsets: ["latin", "latin-ext"],
	display: "swap",
	variable: "--font-noto-sans-hk",
});
export const fonts = { cantarell, notoSansHK };

interface NavigationItem {
	path: string;
	name: string;
	Icon: RemixiconComponentType;
	disabled?: boolean;
}

export const navigationItems: NavigationItem[] = [
	{ path: "/", name: "Home", Icon: RiHomeSmileFill },
	{ path: "/about", name: "About", Icon: RiInformation2Fill, disabled: true },
	{ path: "/articles", name: "Articles", Icon: RiArticleFill, disabled: true },
	{ path: "/tools", name: "Stuffs", Icon: RiToolsFill, disabled: true },
];
