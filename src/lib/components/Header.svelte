<script>
  export let activeLink = "";
</script>

<header>
  <nav>
    <a class="heading" href="/"><span>Syver Giswold</span></a>
    <a class="link {activeLink === 'home' ? 'active' : ''}" href="/">Hjem</a>
    <a class="link {activeLink === 'about' ? 'active' : ''}" href="/about"
      >Om meg</a
    >
    <a class="link {activeLink === 'contact' ? 'active' : ''}" href="/contact"
      >Kontakt</a
    >
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--primary-background);
    view-transition-name: header;
    contain: layout;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, var(--primary-background), transparent);
    pointer-events: none;
    height: 50px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: 80%;
    max-width: 1500px;
  }

  .heading {
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: var(--primary-text);
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary-text);
    min-height: 44px;
    min-width: 133px;
    transition: 0.3s;
    font-size: var(--h5);
    font-weight: 400;
  }

  .active {
    color: var(--primary-text);
    font-weight: 700;
  }

  span {
    font-size: var(--h4);
    font-weight: 700;
  }

  @media (hover: hover) {
    .link:hover,
    .link:focus {
      font-size: var(--h4);
      font-weight: 700;
      color: var(--primary-text);
    }
  }

  @media only screen and (max-width: 900px) {
    nav {
      margin: 0 4rem;
      width: 100%;
    }

    header::after {
      height: 50px;
    }
  }

  @media only screen and (max-width: 750px) {
    .heading {
      display: none;
    }

    nav {
      margin: 0 2rem;
    }
  }

  @media only screen and (max-width: 650px) {
    header {
      padding: 0;
    }

    .link {
      min-width: auto;
    }

    nav {
      gap: 0;
      margin: 0 1rem;
    }
  }

  @media only screen and (max-width: 375px) {
    header {
      max-width: 100%;
    }
  }
</style>