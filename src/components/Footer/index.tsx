import { RiGithubFill } from "@remixicon/react";
import Image from "next/image";

import styles from "./styles.module.scss";
import Anchor from "../Anchor";

export default function Footer() {
	return <footer className={styles["footer"]}>
		<div className={`center ${styles["wrapper"]}`}>
			<Anchor href="https://github.com/graphemecluster" className={styles["author"]}>
				<Image src="/logo.png" alt="graphemecluster’s Logo" className={styles["author-logo"]} />
				<div>
					<div className={styles["author-title"]}>Made by</div>
					<div className={styles["author-name"]}>graphemecluster</div>
				</div>
			</Anchor>
			<Anchor href="https://github.com/graphemecluster/gf-tools" className={styles["source-code"]}>
				<div className={styles["source-code-title"]}>Source Code</div>
				<RiGithubFill size="2rem" />
			</Anchor>
		</div>
	</footer>;
}
