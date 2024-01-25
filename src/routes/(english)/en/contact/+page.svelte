<script>
  import Header from "$lib/components/english/Header.svelte";

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

    status = "Sending...";
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
      status = "E-mail Sent!";
      lastMessage = object.message; // Save the message as the last message
    }
  };
</script>

<Header activeLink="contact" />

<main>
  <section>
    <h1>Contact info</h1>

    <div>
      <p>
        Thank you for visiting my portfolio. I hope you enjoyed looking at my
        work and skills.
      </p>
      <p>
        If you would like to talk to me, you are most welcome. Just feel free to contact me.
      </p>
      <ul>
        <li><span class="bold">Cell</span>971 04 751</li>
        <li><span class="bold">E-mail</span>SyverGiswold@gmail.com</li>
        <li><span class="bold">Location</span>Sande in Vestfold</li>
      </ul>
    </div>
    <div class="link_icons">
      <a href="https://github.com/SyverGiswold" target="_blank"
        ><img src="/assets/github.svg" alt="link to github" /></a
      >
      <a href="https://www.linkedin.com/in/syver-giswold/" target="_blank"
        ><img src="/assets/linkedin.svg" alt="link to linkedin" /></a
      >
    </div>
  </section>
  <div class="divider"></div>
  <section>
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
      <input type="submit" value="Send" />
    </form>

    <div class="status">{status}</div>
  </section>
</main>

<style>
  main {
    min-height: calc(100vh - 80px);
  }

  p {
    margin-top: 2rem;
  }

  span {
    min-width: 90px;
    display: inline-block;
  }

  li {
    list-style: none;
    margin-top: 1rem;
  }

  .link_icons {
    display: flex;
    gap: 16px;
    margin-top: 1rem;
  }

  .link_icons > a {
    height: 44px;
    width: 44px;
  }

  section {
    width: 35%;
  }

  .divider {
    height: 75vh;
    border: 1px solid var(--primary-text);
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
    border: 4px solid var(--secondary-background);
    line-height: 1.5;
    letter-spacing: 0.12rem;
    word-spacing: 0.16rem;
    width: 100%;
    color: var(--primary-text);
  }

  textarea {
    background: none;
    border-radius: var(--border-radius);
    border: 4px solid var(--secondary-background);
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

  img {
    border-radius: 0px;
  }

  @media only screen and (max-width: 900px) {
    main {
      flex-direction: column;
      margin-top: 2rem;
      gap: 4rem;
      min-height: auto;
    }

    main > * {
      width: 100%;
    }

    .divider {
      height: 1px;
    }
  }
</style>
