<script>
  import Header from "$lib/components/english/Header.svelte";
</script>

<Header activeLink="about" />

<main>
  <article>
    <div>
      <h1 class="content-title">About me</h1>

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
    <img src="/assets/Syver_Giswold_04_12x12.webp" alt="" />
  </article>
</main>

<style>
  main {
    min-height: calc(100vh - 80px);
  }

  p {
    margin-top: 2rem;
  }

  div {
    width: 35%;
  }
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    max-width: 50%;
  }

  @media only screen and (max-width: 900px) {
    main {
      margin-top: 2rem;
    }

    div {
      width: 100%;
    }

    img {
      max-width: 75%;
    }

    article {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 650px) {
    img {
      max-width: 100%;
    }
  }
</style>
