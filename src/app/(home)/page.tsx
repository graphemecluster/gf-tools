import { RiExternalLinkLine, RiFileMusicLine, RiInputMethodLine, RiKeyboardBoxLine, RiMedalLine, RiNpmjsLine, RiPagesLine, RiRefreshLine, RiTeamLine } from "@remixicon/react";

import Anchor from "@/components/Anchor";
import { TypeScriptLine } from "@/components/icons";

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
						<RiKeyboardBoxLine size="2rem" />
						<div>
							<div>TypeDuck Cantonese Input Method</div>
							<div>https://typeduck.hk</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://jyutping.net">
						<RiPagesLine size="2rem" />
						<div>
							<div>Website</div>
							<div>https://jyutping.net</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://gwaiyukfong.com">
						<RiPagesLine size="2rem" />
						<div>
							<div>Website</div>
							<div>https://gwaiyukfong.com</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/microsoft/TypeScript/pull/51837">
						<TypeScriptLine size="2rem" />
						<div>
							<div>Pull Request to TypeScript Repository: Correct Errors of Octal and Bad Escape Sequences</div>
							<div>https://github.com/microsoft/TypeScript/pull/51837</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/microsoft/TypeScript/pull/55600">
						<TypeScriptLine size="2rem" />
						<div>
							<div>Pull Request to TypeScript Repository: Provide Syntax Checking for Regular Expressions</div>
							<div>https://github.com/microsoft/TypeScript/pull/55600</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://npmjs.com/package/ndarray-methods">
						<RiNpmjsLine size="2rem" />
						<div>
							<div>NPM Package</div>
							<div>https://npmjs.com/package/ndarray-methods</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://chordlistener.com/editor/">
						<RiFileMusicLine size="2rem" />
						<div>
							<div>Tool for Chord Sheets Editing</div>
							<div>https://chordlistener.com/editor/</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://en.wiktionary.org/wiki/Module:ltc-pron/predict">
						<RiInputMethodLine size="2rem" />
						<div>
							<div>Prediction of Mandarin & Cantonese Pronunciations from Middle Chinese</div>
							<div>https://en.wiktionary.org/wiki/Module:ltc-pron/predict</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://nk2028.shn.hk/qieyun-autoderiver/">
						<RiInputMethodLine size="2rem" />
						<div>
							<div>Tool for Pronunciations Prediction from Middle Chinese</div>
							<div>https://nk2028.shn.hk/qieyun-autoderiver/</div>
						</div>
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
						<span>ChordWiki Maintenance Team</span>
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
						<div>
							<div>
								<span lang="zh-HK">「華夏盃」全國數學奧林匹克邀請賽（華南賽區） – 特等獎</span> <span className={styles["year"]}>(2018)</span>
							</div>
							<div>
								<span lang="en">National Mathematics Olympic</span>
								{"　"}
								<span lang="ja">全国数学オリンピック</span>
							</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://hkoi.org">
						<RiMedalLine size="2rem" />
						<div>
							<div>
								<span lang="zh-HK">香港電腦奧林匹克競賽（初級組） – 銀獎</span> <span className={styles["year"]}>(2018)</span>
							</div>
							<div>
								<div lang="en">Hong Kong Olympiad in Informatics (HKOI) Junior Group – Silver Medal</div>
								<div lang="ja">香港情報オリンピック（競技プログラミング）</div>
							</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://www.jlpt.jp">
						<RiMedalLine size="2rem" />
						<div>
							<div>
								<span lang="ja">日本語能力試験 N1 – 合格</span> <span className={styles["year"]}>(2021)</span>
							</div>
							<div>
								<span lang="en">Japanese-Language Proficiency Test (JLPT) N1 – Passed</span>
							</div>
						</div>
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
