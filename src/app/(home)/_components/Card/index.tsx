import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import Image from "next/image";

import Anchor from "@/components/Anchor";
import { Migdal, Qiita } from "@/components/icons";

import styles from "./styles.module.scss";

export default function Card() {
	return <div className={styles["card"]}>
		<div className={styles["card-header"]}>
			<div className={styles["card-title"]}>
				<span lang="zh-HK" title="中文">形素叢集</span>
				<span lang="en" title="英文">graphemecluster</span>
				<span lang="ja" title="日本語">ぐらふぃーむ</span>
				<span lang="art-x-ithkuil" title="Ithkuil Ⅲ">opal&nbsp;Grafîm</span>
				<span lang="tok" title="toki pona">jan&nbsp;Kuwapin</span>
				<span lang="jbo" title="Lojban">la&nbsp;.grafim.</span>
			</div>
			<Image src="/logo.png" alt="graphemecluster’s Logo" className={styles["card-logo"]} />
		</div>
		<p className={styles["card-body"]}>
			An amateur web & software developer who mainly works on languages and linguistics, and sometimes music and mathematics.
		</p>
		<div className={styles["card-footer"]}>
			<Anchor href="https://github.com/graphemecluster" className={styles["card-link"]}>
				<RiGithubFill size="2rem" />
				<div className={styles["card-link-title"]}>GitHub</div>
			</Anchor>
			<Anchor href="https://twitter.com/graphemecluster" className={styles["card-link"]}>
				<RiTwitterFill size="2rem" />
				<div className={styles["card-link-title"]}>Twitter</div>
			</Anchor>
			<Anchor href="https://qiita.com/graphemecluster" className={styles["card-link"]}>
				<Qiita size="2rem" />
				<div className={styles["card-link-title"]}>Qiita</div>
			</Anchor>
			<Anchor href="https://migdal.jp/graphemecluster" className={styles["card-link"]}>
				<Migdal size="2rem" />
				<div className={styles["card-link-title"]}>Migdal</div>
			</Anchor>
		</div>
	</div>;
}
