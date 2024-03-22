import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import Image from "next/image";

import Anchor from "@/components/Anchor";

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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="currentColor" width="2rem" height="2rem">
					<path d="M200 0C89.543 0 0 89.544 0 200c0 110.457 89.543 200 200 200 56.64 0 107.775-23.55 144.164-61.387-6.383-.957-12.91-3.437-19.111-7.57-11.908-7.939-22.477-15.438-28.028-27.898-21.574 23.01-50.887 30.58-86.37 34.17-71.85 7.265-134.093-24.822-141.632-104.993-3.204-34.082 4.38-66.482 19.674-93.033l-8.904-35.016c-1.437-6.086 4.164-11.877 10.096-10.437l30.76 7.467c18.29-15.019 40.414-24.833 64.82-27.301 20.876-2.11 41.116 1.391 59.517 9.375l28.912-17.49c5.442-3.291 12.332.429 12.852 6.94l1.666 41.245v.002c22.235 23.474 37.374 55.532 40.797 91.936 1.933 20.562-.2 36.292-5.65 51.299-2.552 7.024-3.32 12.963 1.292 18.841 4.456 5.68 11.525 16.71 19.407 14.862 11.845-2.778 24.53-2.039 32.37 2.857C391.542 265.876 400 233.93 400 200 400 89.544 310.457 0 200 0zm-1.21 95.451a90.001 90.001 0 0 0-10.245.453c-36.807 3.722-65.952 30.225-74.895 64.14l-21.959-3.325-.234 4.314 21.621 2.346c-.587 2.495-1.07 3.973-1.433 6.537l-18.866 1.504.172 3.375 18.387-1.467c-.324 2.855-.517 4.69-.553 7.61l-16.797 6.867.824 4.164 15.997-7.487c.037 2.231.133 3.42.345 5.678 4.446 47.285 43.941 56.635 91.13 51.863 47.186-4.772 84.195-21.857 79.75-69.142-.215-2.27-.541-3.448-.923-5.654l17.328 3.761.405-3.816-18.176-3.45c-.57-2.811-1.275-4.518-2.107-7.212l18.68-2.29-.264-3.365-19.165 2.348a84.922 84.922 0 0 0-2.775-7.098l21.108-6.736-.663-4.226-22.45 7.777c-13.649-28.613-41.67-47.04-74.243-47.469z" />
				</svg>
				<div className={styles["card-link-title"]}>Qiita</div>
			</Anchor>
		</div>
	</div>;
}
