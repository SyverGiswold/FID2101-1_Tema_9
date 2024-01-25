<script>
  import Header from "$lib/components/Header.svelte";

  import VerticalDivider from "../../VerticalDivider.svelte";

  import Divider from "../../Divider.svelte";

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

<Header activeLink="Kontakt" />

<main>
  <section>
    <h1>Kontakt info</h1>

    <div>
      <p>
        Takk for at du besøker min portefølje. Jeg håper du likte å se på mine
        arbeider og ferdigheter.
      </p>
      <p>
        Hvis du har lyst til å snakke med meg, så er du hjertelig velkommen. Det
        bare å ta kontakt med meg.
      </p>
      <ul>
        <li><span class="bold">Tlf</span>971 04 751</li>
        <li><span class="bold">E-post</span>SyverGiswold@gmail.com</li>
        <li><span class="bold">Bosted</span>Sande i Vestfold</li>
      </ul>
    </div>
    <div class="link_icons">
      <a href="https://github.com/SyverGiswold" target="_blank"
        ><img src="/assets/github.svg" alt="" /></a
      >
      <a href="https://www.linkedin.com/in/syver-giswold/" target="_blank"
        ><img src="/assets/linkedin.svg" alt="" /></a
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
        <label for="name">Navn</label>
        <input type="text" name="name" placeholder="Navn Navnesen" required />
      </div>
      <div>
        <label for="email">E-post</label>
        <input
          type="email"
          name="email"
          placeholder="eksempel@e-post.no"
          required
        />
      </div>
      <div>
        <label for="message">Melding</label>
        <textarea
          name="message"
          placeholder="Send meg en melding"
          required
          rows="5"
        />
      </div>
      <input type="submit" value="Send inn" />
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
    width: 80px;
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
