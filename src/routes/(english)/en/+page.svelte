<script>
  import Header from "$lib/components/Header.svelte";
  import Card from "$lib/components/card/Card.svelte";

  // Mail form script https://web3forms.com/platforms/svelte-contact-form
  let status = "";
  let lastMessage = "";
  const handleSubmit = async (data) => {
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Check if the message is the same as the last one
    if (object.message === lastMessage) {
      return;
    }

    status = "Sender...";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = "E-post Sent!";
      lastMessage = object.message; // Save the message as the last message
    }
  };
</script>

<svelte:head>
  <title>Syver Giswold - UX/UI Designer & Frontend Developer</title>

  <meta
    name="description"
    content="Explore Syver Giswold's portfolio - a talented UX/UI designer & frontend developer. Discover innovative design solutions. Contact me for your next project!"
  />
  <meta
    name="keywords"
    content="design ui, portefølje design, portefølje grafisk design, ux og ui design, ux og ui, ui og ux, ux, ui, Interaksjonsdesign, Brukergrensesnitt design, Brukeropplevelse design, Frontend utvikling, JavaScript, CSS, HTML, Responsive design, Webdesign, Webutvikling, Prototyping, Brukertesting, Designsystemer, Designprinsipper, Tilgjengelighet, Kreativ problemløsning, Syver, Giswold"
  />

  <link rel="alternate" hreflang="no" href="https://syver-g.netlify.app/" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://syver-g.netlify.app/en" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Syver's portfolio" />
  <meta
    property="og:description"
    content="Explore the portfolio of Syver Giswold, a dedicated interaction designer with a focus on frontend development. Review projects that demonstrate skills in user interface design, user experience design, and more."
  />
  <meta
    property="og:image"
    content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp"
  />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="syver-g.netlify.app/" />
  <meta property="twitter:url" content="https://syver-g.netlify.app/en" />
  <meta name="twitter:title" content="Syver's portfolio" />
  <meta
    name="twitter:description"
    content="Explore the portfolio of Syver Giswold, a dedicated interaction designer with a focus on frontend development. Review projects that demonstrate skills in user interface design, user experience design, and more."
  />
  <meta
    name="twitter:image"
    content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp"
  />

  <!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<Header />

<main>
  <h1 class="sr-only">Syver's portfolio</h1>
  <section id="home">
    <div>
      <h2>Projects</h2>
      <p class="bold">Welcome to my porfolio!</p>

      <p>
        Here you can see some of the exciting and creative projects I have
        worked on as an interaction designer. I am familiar with tools such as
        Figma, Webflow, HTML, CSS, JavaScript, Photoshop, Illustrator, Indesign,
        After Effects, and Premiere Pro.
      </p>

      <p>
        I hope you enjoy projects and seeing what I have learned and achieved.
        If you have any questions or feedback, feel free to contact me.
      </p>
    </div>

    <div class="cardSection">
      <Card link="./en/projects/tema_8">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          class="image-transition-tema_8"
          slot="image"
          src="/assets/tema_8/MacBook_Dresser_Mockup_4.webp"
          alt="A laptop displays an article titled 'Journey to Mars' with a picture of a Mars rover"
        />
        <h3 slot="title">Text app</h3>
        <p slot="lede">
          In this task, I chose to create a rich text editor similar to TinyMCE
          and CKEditor that would be usable with only a keyboard.
        </p>
        <span slot="executed"><span class="bold">Executed: </span>Alone</span>
        <span slot="period"><span class="bold">Duration: </span>6 weeks</span>
      </Card>
      <Card link="./en/projects/tema_5">
        <img
          class="image-transition-tema_5"
          slot="image"
          src="/assets/tema_5/Free_Laptop_Mockup.webp"
          alt="A tablet displays a shopping list app with categories for 'Meny', 'Rema 1000' and 'Extra'"
        />
        <h3 slot="title">Shopping list app</h3>
        <p slot="lede">
          This task was about learning Javascript and creating a shopping list
          application in Javascript.
        </p>
        <span slot="executed"><span class="bold">Executed: </span>Alone</span>
        <span slot="period"><span class="bold">Duration: </span>6 weeks</span>
      </Card>
      <Card link="./en/projects/tema_16">
        <img
          class="image-transition-tema_16"
          slot="image"
          src="/assets/tema_16/Free_Tabbed_Brochure_1.webp"
          alt="Cover of an accessibility report for Ygg & Lyng with the title 'Accessibility Report' and navigation tabs"
        />
        <h3 slot="title">Universell utforming rapport</h3>
        <p slot="lede">
          This report focuses on universal design and accessibility on Ygg & Lyng's website, encompassing both automatic and manual testing.
        </p>
        <span slot="executed"><span class="bold">Executed: </span>Alone</span>
        <span slot="period"><span class="bold">Duration: </span>3 weeks</span>
      </Card>
    </div>
  </section>
  <section id="about">
    <article>
      <div>
        <h2>About me</h2>

        <p>
          I am an interaction design student who is passionate about creating
          user-friendly and aesthetic solutions for digital products. I have
          experience in designing and developing interactive prototypes, user
          tests, wireframes, and mockups. I also have an interest in frontend
          development and have learned HTML, CSS, and JavaScript.
        </p>

        <p>
          I like to explore new technologies and trends, and to learn from other
          designers and developers. In my portfolio, you can see some of the
          projects I have worked on. I hope you find them interesting.
        </p>
      </div>
      <img src="/assets/Syver_Giswold_04_12x12.webp" alt="Portrait of Syver Giswold, a young man with glasses and a grey sweater" />
    </article>
  </section>
  <section id="contact">
    <h2>Contact info</h2>
    <div class="contactSection">
      <div>
        <p>
          Thank you for visiting my portfolio. I hope you enjoyed looking at my
          work and skills.
        </p>
        <p>
          If you would like to talk to me, you are most welcome. Just feel free
          to contact me.
        </p>
        <ul>
          <li><span class="bold">Cell</span>971 04 751</li>
          <li><span class="bold">E-mail</span>SyverGiswold@gmail.com</li>
          <li><span class="bold">Location</span>Sande i Vestfold</li>
        </ul>
        <div class="link_icons">
          <a href="https://github.com/SyverGiswold" target="_blank"
            ><img src="/assets/github.svg" alt="lenke til github" /></a
          >
          <a href="https://www.linkedin.com/in/syver-giswold/" target="_blank"
            ><img src="/assets/linkedin.svg" alt="lenke til linkedin" /></a
          >
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <form on:submit|preventDefault={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="0def2d92-843a-4f08-b8b9-7d7e00bf8cfd"
          />
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style="display: none;"
          />
          <div>
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label for="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@e-mail.com"
              required
            />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Send me a message!"
              required
              rows="5"
            />
          </div>
          <input type="submit" value="Send inn" />
        </form>

        <div class="status">{status}</div>
      </div>
    </div>
  </section>
</main>

<style>
  main {
    flex-direction: column;
  }

  section {
    padding: 80px 0;
    scroll-margin-top: 40px;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  article img {
    width: 50%;
  }

  p {
    margin-bottom: 2rem;
  }

  .cardSection {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  }

  .contactSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .contactSection > * {
    width: 50%;
  }

  li {
    list-style: none;
    margin-top: 1rem;
  }

  li span {
    min-width: 90px;
    display: inline-block;
  }

  .link_icons {
    display: flex;
    gap: 16px;
    margin-top: 1rem;
  }

  .link_icons > a,
  .link_icons > a > img {
    height: 44px;
    width: 44px;
  }

  .divider {
    height: 50vh;
    border: 1px solid var(--primary-text);
    width: 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  input {
    background: none;
    padding: 12px;
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary-background);
    line-height: 1.5;
    letter-spacing: 0.12rem;
    word-spacing: 0.16rem;
    width: 100%;
    color: var(--primary-text);
  }

  textarea {
    background: none;
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary-background);
    color: var(--primary-text);
    padding: 12px;
    line-height: 1.5;
    letter-spacing: 0.12rem;
    word-spacing: 0.16rem;
    width: 100%;
    resize: none;
  }

  label {
    display: block;
    padding-bottom: 12px;
  }

  [type="submit"] {
    width: 140px;
    margin: 0 auto;
  }

  [type="submit"]:hover {
    background-color: var(--secondary-background);
    color: var(--tertiary-text);
  }

  .status {
    display: block;
    height: 24px;
    margin-top: 24px;
    text-align: center;
  }

  ::placeholder {
    color: var(--secondary-text);
  }

  @media only screen and (max-width: 1300px) {
    main {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 900px) {
    main {
      flex-direction: column;
    }

    article {
      flex-direction: column;
    }

    article img {
      width: 100%;
    }

    .contactSection {
      flex-direction: column;
    }

    .contactSection > * {
      width: 100%;
    }

    .contactSection .divider {
      height: 1px;
    }

    .link_icons {
      margin-top: 2rem;
    }

    .link_icons img {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 375px) {
    h1 {
      line-break: anywhere;
    }
  }
</style>
