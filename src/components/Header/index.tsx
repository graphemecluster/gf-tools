import Image from "next/image";

import styles from "./styles.module.scss";
import Anchor from "../Anchor";

export default function Header() {
	return <header className={styles["header"]}>
		<div className={`center ${styles["wrapper"]}`}>
			<Anchor href="/" className={styles["brand"]}>
				<Image src="/logo.png" alt="graphemecluster’s Logo" className={styles["brand-logo"]} />
				<div className={styles["brand-title"]}>
					<h1 className={styles["brand-title-zh"]}>形素叢集</h1>
					<h2 className={styles["brand-title-en"]}>graphemecluster</h2>
				</div>
			</Anchor>
		</div>
	</header>;
}
