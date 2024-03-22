import { usePathname } from "next/navigation";

import { navigationItems } from "@/lib/consts";
import { getStyles } from "@/lib/utils";

import styles from "./styles.module.scss";
import Anchor from "../Anchor";

export default function Navigation() {
	const pathname = usePathname() || "/";
	const currentSubpage = pathname.slice(0, `${pathname}/`.indexOf("/", 1));
	return <nav className={styles["nav"]}>
		<div className={`center ${styles["wrapper"]}`}>
			{navigationItems.map(({ path, name, Icon, disabled }) =>
				<Anchor
					href={path}
					key={path}
					className={getStyles(styles, [
						"nav-item",
						currentSubpage === path && "current",
						disabled && "disabled",
					])}>
					<Icon size="1.75rem" />
					<div className={styles["nav-item-title"]}>{name}</div>
				</Anchor>
			)}
		</div>
	</nav>;
}
