<script>
	import Lede from "$lib/components/Lede.svelte";

	import Divider from "$lib/components/Divider.svelte";

	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Syver's portfolio - Universal Design Report</title>

	<link rel="alternate" hreflang="no" href="https://syver-g.netlify.app/projects/tema_16" />
</svelte:head>

<Header />

<main>
	<article>
		<img
			class="image-transition-tema_16"
			src="/assets/tema_16/Free_Tabbed_Brochure_1.webp"
			alt=""
		/>
		<h1>Universal Design Report</h1>

		<Lede
			ledeText="This report focuses on universal design and accessibility on Ygg & Lyng's website, encompassing both automatic and manual testing."
		/>

		<p>
			Report Link: <a
				href="/assets/tema_16/ygg&lyng Tilsynsrapport.pdf"
				target="_blank">ygg&lyng supervisory report</a
			>
		</p>
		<p>
			Code Examples Link: <a
				href="https://codepen.io/collection/gYyJRq"
				target="_blank">https://codepen.io/collection/gYyJRq</a
			>
		</p>

		<Divider dividerText="Report Template"></Divider>

		<p>
			To ensure an effective, structured, and clear report, I started by
			creating a template in Google Docs. This template defined basic elements
			such as font, font size, pagination, and a banner element. The banner was
			designed to help the reader stay informed about the section of the report
			they are currently viewing. Since the report is significantly long, I felt
			this would be practical.
		</p>

		<img src="/assets/tema_16/Docs_mal.webp" alt="" />

		<Divider dividerText="Manual Testing"></Divider>

		<div>
			<p>
				Manual testing was conducted to uncover potential accessibility
				challenges on the website. To test the user experience for people with
				visual impairments, Windows Screen Reader and Android Talkback were
				utilized. These tools read the website content, thereby revealing issues
				related to navigation, content comprehension, and the use of interactive
				elements.
			</p>

			<p>
				Ideally, I would have used the <a
					href="https://www.freedomscientific.com/products/software/jaws/"
					target="_blank">Jaws screen reader</a
				> as it is the most popular screen reader on Windows, but unfortunately,
				you need to purchase a license for the program.
			</p>
		</div>

		<div>
			<p>
				To perform a thorough analysis, Firefox Inspect Elements was preferred
				over Chrome. Firefox offers extended functionality for accessibility
				testing. The "Accessibility Inspector" tool allows for quick and
				efficient measurement of text contrast, providing a scale from the
				lowest to the highest contrast on individual text elements.
				Additionally, Firefox identifies potential accessibility issues related
				to HTML elements and their attributes.
			</p>

			<img src="/assets/tema_16/Firefox_inspiser_elementer.webp" alt="" />
		</div>

		<Divider dividerText="Automatic Testing"></Divider>

		<p>
			Following the manual testing, I performed automatic tests using various
			tools:
		</p>
		<div>
			<ul>
				<li>
					<a
						href="https://developer.chrome.com/docs/lighthouse/overview"
						target="_blank">Google Lighthouse:</a
					> A tool integrated into Chrome that evaluates websites based on performance,
					accessibility, best practices, and SEO. Lighthouse generates a report with
					concrete suggestions for improvements.
				</li>
				<li>
					<a
						href="https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi"
						target="_blank">HeadingsMap (Chrome-utvidelse):</a
					> Visualizes the website's heading structure (h1-h6) in a hierarchical
					tree, thereby revealing any missing or incorrect uses of headings, which
					is crucial for navigation for screen reader users.
				</li>
			</ul>
			<ul>
				<li>
					<a
						href="https://chromewebstore.google.com/detail/djcglbmbegflehmbfleechkjhmedcopn"
						target="_blank"
						>Siteimprove Accessibility Checker (Chrome-utvidelse):</a
					> Scans the website for violations of WCAG guidelines, WAI-ARIA standards,
					and best practices. It then identifies issues and provides you with a list
					of all errors on the website.
				</li>
				<li>
					<a
						href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg"
						target="_blank">Wappalyzer (Chrome-utvidelse):</a
					> Identifies technologies used on the website, such as CMS, programming
					languages, Javascript libraries, and plugins. This provides insights into
					potential causes of performance issues and compatibility challenges.
				</li>
			</ul>
		</div>

		<img src="/assets/tema_16/Chrome_utvidelser.webp" alt="" />

		<Divider dividerText="Documentation of Findings"></Divider>

		<p>
			During testing, all identified violations of WCAG guidelines were
			meticulously documented in a separate section. Each finding was briefly
			explained, supplemented by references to relevant WCAG criteria or other
			applicable resources.
		</p>

		<img src="/assets/tema_16/Dokumentasjon_av_funn.webp" alt="" />

		<div>
			<p>
				Documentation of findings varied based on the complexity of each issue,
				but what is common among all findings is a brief explanation, links to
				resources like wcag or law of ux, a more detailed explanation, and a
				suggested solution.
			</p>

			<p>
				Two of the findings were exceptions where I created a full section of
				the website from scratch. This was because these issues can be very
				difficult to understand if you only read about them. In these cases, I
				created a codepen that shows these new sections in a responsive way.
				These examples can be found here <a
					href="https://codepen.io/collection/gYyJRq"
					target="_blank">https://codepen.io/collection/gYyJRq</a
				>
			</p>
		</div>

		<img src="/assets/tema_16/codepen.webp" alt="" />

		<p>
			Beyond WCAG violations, other user experience issues were also recorded.
			These consisted of elements that potentially hindered usability but did
			not necessarily violate WCAG. These findings were documented separately
			for later elaboration.
		</p>

		<Divider dividerText="Elaboration on Other Findings"></Divider>

		<p>
			After completing the manual and automatic testing, I went into depth on
			the other findings. Each issue was documented similarly to WCAG issues,
			and concrete suggestions for improvements were provided based on
			principles of universal design and usability.
		</p>

		<Divider dividerText="Report Summary"></Divider>

		<p>
			To provide a concise overview of the key issues, I wrote a summary. This
			section presented the most critical findings, along with a brief
			explanation of why these are problematic for usability and accessibility.
		</p>

		<Divider dividerText="Resources and References"></Divider>

		<div>
			<p>
				I included a list of all resources and tools used during the preparation
				of the report. This included links to automatic and manual testing
				tools, relevant WCAG criteria, legislation related to privacy, general
				resources for universal design, and code examples.
			</p>

			<p>
				By following this structured and chronological process, I ensured a
				thorough and informative audit report that provides Ygg & Lyng with a
				solid foundation to improve the website's accessibility and user
				experience.
			</p>
		</div>
	</article>
</main>

<style>
	main {
		display: block;
	}

	iframe {
		border: 1px solid var(--secondary-background);
		border-radius: var(--border-radius);
		width: 100%;
		height: 600px;
		max-height: 80vh;
	}

	article > * {
		margin-top: 2rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin-top: 4rem;
	}

	article {
		padding: 48px 0;
	}

	article > div {
		display: flex;
		gap: 2rem;
		flex-grow: 0;
		flex-shrink: 0;
		align-items: flex-start;
	}

	li {
		list-style: none;
		margin-top: 2rem;
	}

	div > * {
		width: calc(50% - 1rem);
	}

	.persona > p {
		margin-top: 2rem;
	}

	.margin-top {
		margin-top: 2rem;
	}

	p {
		width: 100%;
	}

	ul {
		width: 100%;
	}

	a {
		color: var(--primary-color);
		font-weight: 700;
	}

	.persona > div {
		width: 100%;
		display: flex;
		gap: 48px;
	}

	@media only screen and (max-width: 900px) {
		.persona_section {
			flex-direction: column;
		}

		.persona {
			width: auto;
		}
	}

	@media only screen and (max-width: 750px) {
		article > div {
			flex-direction: column;
		}

		div > * {
			width: 100%;
		}

		.persona > div > img {
			width: 50%;
		}
	}

	@media only screen and (max-width: 500px) {
		.persona > div {
			flex-direction: column;
		}

		.persona > div > img {
			width: 100%;
		}
	}
</style>
