import { RiCodeSSlashFill, RiExternalLinkLine, RiFileCodeLine, RiFileMusicLine, RiFontSize, RiInputMethodLine, RiKeyboardBoxLine, RiMedalLine, RiMusic2Fill, RiNpmjsLine, RiPagesLine, RiRefreshLine, RiTeamLine, RiTranslate2 } from "@remixicon/react";

import Anchor from "@/components/Anchor";
import { TypeScriptLine } from "@/components/icons";

import Card from "./_components/Card";
import styles from "./styles.module.scss";

export default function Home() {
	return <div className={`center ${styles["wrapper"]}`}>
		<Card />
		<section className={styles["intro"]}>
			<div>
				<p lang="en">I have been fascinated by programming, music, language and linguistics from an early age. I specialise in the development of web (front-end) and mobile applications both as a professional pursuit and a personal hobby – in my spare time, I develop tools related to language and music, and contribute to open source projects.</p>
				<p lang="zh-yue-HK">我自細就對程式設計、音樂、語言同語言學着迷，平時專門開發網頁（前端）同流動應用程式，餘暇時間除咗開發同語言或者音樂相關嘅工具，亦會參與社羣開發項目，對開源生態圈作出貢獻。</p>
				<p lang="ja">幼い頃からプログラミング・音楽・言語・言語学に魅了されてきたウェブ（フロントエンド）とモバイルアプリ開発を専門としているデベロッパー。余暇の個人開発としては言語や音楽に関連するツールを中心に作っていて、OSS 活動もしています。</p>
			</div>
			<div>
				<p lang="en">In addition to my commitment as a developer, I enjoy learning languages and studying linguistics, as well as playing the piano, drums and creating musical scores.</p>
				<p lang="zh-yue-HK">除咗開發，我亦鍾意學習語言、鑽研語言學，仲有彈琴、打鼓同製作琴譜。</p>
				<p lang="ja">開発以外にも言語学習や言語学の勉強、それとピアノとドラムの演奏や楽譜制作も趣味としています。</p>
			</div>
		</section>
		<section>
			<h3>Featured Works</h3>
			<ul>
				<li>
					<Anchor href="https://typeduck.hk">
						<RiKeyboardBoxLine size="2rem" />
						<div>
							<div>TypeDuck 粵語拼音輸入法 Cantonese Input Method</div>
							<div>https://typeduck.hk</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://jyutping.net">
						<RiPagesLine size="2rem" />
						<div>
							<div>粵拼輸入法下載網站 Jyutping IME Download Website</div>
							<div>https://jyutping.net</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://gwaiyukfong.com">
						<RiPagesLine size="2rem" />
						<div>
							<div>網頁 Website</div>
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
							<div>
								<span lang="ja">ChordWiki 用コード譜エディター</span> <span lang="en">Tool for Chord Sheets Editing</span>
							</div>
							<div>https://chordlistener.com/editor/</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://en.wiktionary.org/wiki/Module:ltc-pron/predict">
						<RiInputMethodLine size="2rem" />
						<div>
							<div>從中古漢語推導粵語及普通話讀音 Prediction of Modern Pronunciations from Middle Chinese</div>
							<div>https://en.wiktionary.org/wiki/Module:ltc-pron/predict</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://nk2028.shn.hk/tshet-uinh-autoderiver/">
						<RiInputMethodLine size="2rem" />
						<div>
							<div>切韻音系自動推導器 Tool for Pronunciations Extrapolation from Middle Chinese</div>
							<div>https://nk2028.shn.hk/tshet-uinh-autoderiver/</div>
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
						<div>
							<div>Ideographic Research Group (ISO/IEC JTC1/SC2/WG2/IRG)</div>
							<div>表意文字小組</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/CanCLID">
						<RiTeamLine size="2rem" />
						<div>
							<div>Cantonese Computational Linguistics Infrastructure Development Workgroup (CanCLID)</div>
							<div>粵語計算語言學基礎建設組</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://github.com/nk2028">
						<RiTeamLine size="2rem" />
						<div>
							<div>nk2028</div>
							<div>開發計算語言學工具，尤其是中日韓越歷史語言學相關工具</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://hon9kon9ize.com">
						<RiTeamLine size="2rem" />
						<div>
							<div>香港本土語言保育協會</div>
							<div>Association for Conservation of Hong Kong Indigenous Languages</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://hon9kon9ize.com">
						<RiTeamLine size="2rem" />
						<div>
							<div>hon9kon9ize</div>
							<div>香港人工智能技術研究社羣</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="https://ja.chordwiki.org">
						<RiTeamLine size="2rem" />
						<div>
							<div>ChordWiki Maintenance Team</div>
							<div>日本歌詞和弦譜 wiki 網站維護團隊</div>
						</div>
					</Anchor>
				</li>
			</ul>
		</section>
		<section>
			<h3>Knowledge & Skills</h3>
			<ul>
				<li>
					<Anchor href="">
						<RiFileCodeLine size="2rem" />
						<div>
							<div>Web Applications (Front-end) & Software Development</div>
							<div>網頁應用程式（前端）及軟件開發</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="">
						<RiCodeSSlashFill size="2rem" />
						<div>
							<div>ECMAScript Language Specification & TC39 Process</div>
							<div>ECMAScript 語言規範及 TC39 提案流程</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="">
						<RiFontSize size="2rem" />
						<div>
							<div>Linguistics (Phonetics and Phonology)</div>
							<div>語言學（語音學及音韻學）</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="">
						<RiTranslate2 size="2rem" />
						<div>
							<div>Cantonese, English, Mandarin, Japanese & Korean</div>
							<div>粵語、英語、普通話、日語及韓語</div>
						</div>
					</Anchor>
				</li>
				<li>
					<Anchor href="">
						<RiMusic2Fill size="2rem" />
						<div>
							<div>Music Theory & Sheet Music Production</div>
							<div>樂理及樂譜製作</div>
						</div>
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
								「華夏盃」全國數學奧林匹克邀請賽（華南賽區） – 特等獎 <span className={styles["year"]}>(2018)</span>
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
								香港電腦奧林匹克競賽（初級組） – 銀獎 <span className={styles["year"]}>(2018)</span>
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
