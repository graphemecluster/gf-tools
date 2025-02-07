import { RiArticleFill, RiHomeSmileFill, RiInformation2Fill, RiToolsFill } from "@remixicon/react";

import type { RemixiconComponentType } from "@remixicon/react";

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
