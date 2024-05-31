<script>
  import Lede from "$lib/components/Lede.svelte";

  import Divider from "$lib/components/Divider.svelte";

  import Header from "$lib/components/Header.svelte";

  import VerticalDivider from "$lib/components/VerticalDivider.svelte";
</script>

<svelte:head>
	<title>Syver's portfolio - Shopping list app</title>

  <meta name="description" content="Developing a shopping list app with JavaScript, focusing on user experience and accessibility. Learn about the design process, code examples, and try the live demo!">

  <link rel="alternate" hreflang="no" href="https://syver-g.netlify.app/projects/tema_5" />
</svelte:head>

<Header />

<main>
  <article>
    <img
      class="image-transition-tema_5"
      src="/assets/tema_5/Free_Laptop_Mockup.webp"
      alt=""
    />

    <h1>Shopping list app</h1>

    <div>
      <Lede
        ledeText="This task was about learning Javascript and creating a shopping list application in Javascript."
      />
    </div>

    <iframe
      title="Figma project file"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc00zwz6qMCZVSkeP7jgpso%2FTema-5%3Ftype%3Ddesign%26node-id%3D4%253A62%26mode%3Ddesign%26t%3D2zN7YQyqJhYaXh2t-1"
      allowfullscreen
    ></iframe>

    <p>
      Link to github repository: <a
        href="https://github.com/SyverGiswold/FID1200-1_Team_5"
        target="_blank">https://github.com/SyverGiswold/FID1200-1_Team_5</a
      >
    </p>
    <p>
      Link to demo side: <a
        href="https://fid1200-1-tema-5-shopping-list.netlify.app/"
        target="_blank">https://fid1200-1-tema-5-shopping-list.netlify.app/</a
      >
    </p>

    <Divider dividerText="Sketches"></Divider>

    <p>
      I started by making some simple sketches of how I wanted that Shopping
      list the application should look like. Both to mobile and tirestop format.
    </p>
    <div>
      <img src="/assets/tema_5/Handleliste_desktop.webp" alt="" />
      <img src="/assets/tema_5/Handleliste_desktop_2.webp" alt="" />
    </div>
    <div>
      <img src="/assets/tema_5/Handleliste_telefon.webp" alt="" />
      <img src="/assets/tema_5/Handleliste_telefon_2.webp" alt="" />
    </div>

    <Divider dividerText="User interface"></Divider>
    <h3>Color palette</h3>
    <div>
      <p>
        When it came time to start with the UI, I started by finding a color
        palette and decide on a font. Getting to choose colors selected i to use
        a website <a href="https://coolors.co/" target="_blank"
          >https://coolors.co/</a
        >. This was because the page generate different color palette that I can
        use as inspiration.
      </p>
      <img src="/assets/tema_5/fargepalett.webp" alt="" />
    </div>
    <h3>Font</h3>
    <div>
      <p>
        When I chose the font I used roboto because it is a clean and modern
        font which is easily legible that was specifically designed for phones
        that fit Good for a shopping list website.
      </p>
      <img src="/assets/tema_5/font.webp" alt="" />
    </div>
    <h3>Components</h3>
    <div>
      <p>
        The icons of the components were drawn themselves. This was because I
        didn't was going to have a lot of icons and then it could quickly take
        me longer to find icons I could use online instead of drawing them
        myself.
      </p>
      <img src="/assets/tema_5/komponenter.webp" alt="" />
    </div>
    <Divider dividerText="Prototype"></Divider>
    <div>
      <p>
        When I started making the prototype, I focused on how I could Make
        shopping list as easy to understand as possible. Then I chose to have a
        clean and easy to disembark. All buttons on the website are also 48px
        minimum get Keep it easy for everyone to tap. With large font sizes as
        well to make the entire website scalable to less than 320px width.
      </p>
      <img src="/assets/tema_5/prototype.webp" alt="" />
    </div>
    <Divider dividerText="Website"></Divider>
    <div>
      <p>
        In the Javascript file I made sure to make the entire shopping list
        possible to Navigate only by keyboard if one prefers it and for
        convenience You can press Enter when the input field on the website is
        highlighted to add things to the list.
        <span class="line-break"
          >On the trash bin icon I have on the website I added a mouseover
          effect that changes the icon to make it more obvious that the icon is
          highlighted and at the same time the hover effect is only active on
          the PC to not create problems on the phone.</span
        >
      </p>
      <img src="/assets/tema_5/søppel_knapp_js.webp" alt="" />
    </div>
    <div>
      <p>
        I also included local storage in the Javascript file so that it is
        Possible for people to use the website add the things they are going to
        buy too Later open the website again to bring back the same list.
      </p>
      <p>
        For me, it was quite problematic to make local storage in this task
        because I have never worked with JavaScript before this task in
        additionally, I had to make an array out of everything I was going to
        store in Local Storage.
      </p>
    </div>
    <div>
      <p>
        Originally, when I implemented local storage I only saved the html in the page, but
        Since it's an unsecure way to do it, I had to find others solutions and
        then the answer was to convert elements from the HTML file above to
        string. First variation of this I had two functions to add to elements
        in HTML and one to take the HTML elements and convert it Over to String
        which was stored in Local Storage. This was an ineffective System where
        I had to repeat everything I had in HTML and Local Storage function
        twice.
        <span class="line-break"
          >In the latest version I'm using now I've got mixed html function
          along with local storage function so that I avoid the most possible
          repetition.</span
        >
      </p>
      <img src="/assets/tema_5/local_storage.webp" alt="" />
    </div>
    <img src="/assets/tema_5/finished_website.webp" alt="" />
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

  @media only screen and (max-width: 750px) {
    article > div {
      flex-direction: column;
    }

    div > * {
      width: 100%;
    }
  }
</style>
