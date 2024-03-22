import { RiExternalLinkLine, RiMedalLine, RiRefreshLine, RiSparkling2Line, RiTeamLine } from "@remixicon/react";

import Anchor from "@/components/Anchor";

import Card from "./_components/Card";
import styles from "./styles.module.scss";

export default function Home() {
	return <div className={`center ${styles["wrapper"]}`}>
		<Card />
		<section>
			<h3>Featured Works</h3>
			<ul>
				<li>
					<Anchor href="https://typeduck.hk">
						<RiSparkling2Line size="2rem" />
						<span>https://typeduck.hk (Input Method)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://jyutping.net">
						<RiSparkling2Line size="2rem" />
						<span>https://jyutping.net (Website)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://gwaiyukfong.com">
						<RiSparkling2Line size="2rem" />
						<span>https://gwaiyukfong.com (Website)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/microsoft/TypeScript/pull/51837">
						<RiSparkling2Line size="2rem" />
						<span>https://github.com/microsoft/TypeScript/pull/51837</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://npmjs.com/package/ndarray-methods">
						<RiSparkling2Line size="2rem" />
						<span>https://npmjs.com/package/ndarray-methods</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://chordlistener.com/editor/">
						<RiSparkling2Line size="2rem" />
						<span>https://chordlistener.com/editor/ (vanilla)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://en.wiktionary.org/wiki/Module:ltc-pron/predict">
						<RiSparkling2Line size="2rem" />
						<span>https://en.wiktionary.org/wiki/Module:ltc-pron/predict</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://nk2028.shn.hk/qieyun-autoderiver/">
						<RiSparkling2Line size="2rem" />
						<span>https://nk2028.shn.hk/qieyun-autoderiver/</span>
					</Anchor>
				</li>
			</ul>
		</section>
		<section>
			<h3>Affiliations</h3>
			<ul>
				<li>
					<Anchor href="https://en.wikipedia.org/wiki/Ideographic_Research_Group">
						<RiTeamLine size="2rem" />
						<span>Ideographic Research Group (ISO/IEC JTC1/SC2/WG2/IRG)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/CanCLID">
						<RiTeamLine size="2rem" />
						<span>Cantonese Computational Linguistics Infrastructure Development Workgroup (CanCLID)</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/nk2028">
						<RiTeamLine size="2rem" />
						<span>nk2028</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://ja.chordwiki.org">
						<RiTeamLine size="2rem" />
						<span>ChordWiki maintenance team</span>
					</Anchor>
				</li>
			</ul>
		</section>
		<section>
			<h3>Awards & Qualifications</h3>
			<ul>
				<li>
					<Anchor href="https://www.hkmo.com.hk/contest/hxCup.php">
						<RiMedalLine size="2rem" />
						<span>
							「華夏盃」全國數學奧林匹克邀請賽（華南賽區） – 特等獎 <span className={styles["year"]}>(2018)</span>
						</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://hkoi.org">
						<RiMedalLine size="2rem" />
						<span>
							Hong Kong Olympiad in Informatics (HKOI) Junior Group – Silver Medal <span className={styles["year"]}>(2018)</span>
						</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://www.jlpt.jp">
						<RiMedalLine size="2rem" />
						<span>
							Japanese-Language Proficiency Test (JLPT) N1 – Passed <span className={styles["year"]}>(2021)</span>
						</span>
					</Anchor>
				</li>
			</ul>
		</section>
		<details>
			<summary>Old Stuffs</summary>
			<ul>
				<li>
					<Anchor href="/cantonese_to_hangul_converter" className={styles["has-reference"]}>
						<div>
							<RiRefreshLine size="1.5rem" />
							<span>Cantonese to Hangul Converter 粵語拼音諺文轉換器</span>
						</div>
						<Anchor href="https://zh.wikipedia.org/wiki/User:graphemecluster/韓國外來語表記法：粵語">
							<RiExternalLinkLine size="1rem" />
							<span>Wikipedia User Page 維基百科用户頁：韓國外來語表記法：粵語</span>
						</Anchor>
					</Anchor>
				</li>
				<li>
					<Anchor href="/cantonese_to_ipa_converter">
						<RiRefreshLine size="1.5rem" />
						<span>Cantonese to IPA Converter</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="/cantonese_to_kana_converter">
						<RiRefreshLine size="1.5rem" />
						<span lang="ja">Cantonese to Kana Converter 広東語拼音→カタカナ変換</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="/hangul_to_ipa_converter">
						<RiRefreshLine size="1.5rem" />
						<span>Hangul to IPA Converter</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="/hangul_to_kana_converter">
						<RiRefreshLine size="1.5rem" />
						<span lang="ja">Hangul to Kana Converter ハングル→カタカナ変換</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="/hangul_to_phonetic_converter">
						<RiRefreshLine size="1.5rem" />
						<span>Hangul to Phonetic Hangul Converter</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="/pinyin_to_hangul_converter" className={styles["has-reference"]}>
						<div>
							<RiRefreshLine size="1.5rem" />
							<span>Pinyin to Hangul Converter 漢語拼音諺文轉換器</span>
						</div>
						<Anchor href="https://zh.wikipedia.org/wiki/User:graphemecluster/普通話諺文">
							<RiExternalLinkLine size="1rem" />
							<span>Wikipedia User Page 維基百科用户頁：普通話諺文</span>
						</Anchor>
					</Anchor>
				</li>
				<li>
					<Anchor href="/pinyin_to_ipa_converter">
						<RiRefreshLine size="1.5rem" />
						<span>Pinyin to IPA Converter</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://zh.wikipedia.org/wiki/User:graphemecluster/英語母語者用粵語拼音">
						<RiExternalLinkLine size="1.5rem" />
						<span>Wikipedia User Page 維基百科用户頁：英語母語者用粵語拼音</span>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://en.wikipedia.org/wiki/User:graphemecluster/Hong_Kong_English">
						<RiExternalLinkLine size="1.5rem" />
						<span>Wikipedia User Page 維基百科用户頁：Hong Kong English</span>
					</Anchor>
				</li>
			</ul>
		</details>
	</div>;
}
