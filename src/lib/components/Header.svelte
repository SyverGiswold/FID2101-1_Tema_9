<script>
  import { onMount } from "svelte";
  let sections = ["home", "about", "contact"];
  let activeLink = "";
  let isEnglish = false;
  let currentPath = "";

  // Norwegian translations
  let translations = {
    home: "hjem",
    about: "om meg",
    contact: "kontakt",
  };

  onMount(() => {
    isEnglish = window.location.pathname.includes("/en");
    currentPath = window.location.pathname; // Store current path

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeLink = entry.target.id;
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" },
    );

    sections.forEach((section) => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  });
</script>

<header>
  <nav>
    <a class="heading" href={isEnglish ? "/en" : "/"}
      ><span>Syver Giswold</span></a
    >
    {#each sections as section}
      <a
        class="link {activeLink === section ? 'active' : ''}"
        href={isEnglish ? `/en#${section}` : `/#${section}`}
      >
        {isEnglish ? section : translations[section]}
      </a>
    {/each}
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
    max-width: 940px;
  }

  .heading {
    margin-right: auto;
  }

  a {
    text-decoration: none;
    color: var(--primary-text);
    text-transform: capitalize;
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
    }

    header::after {
      height: 50px;
    }
  }

  @media only screen and (max-width: 750px) {
    .heading {
      display: none;
    }
  }

  @media only screen and (max-width: 650px) {
    header {
      padding: 0;
      max-width: 100%;
    }

    .link {
      min-width: auto;
    }

    nav {
      gap: 0;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 425px) {
    header {
      max-width: 100%;
    }

    nav {
      margin: 0 1rem;
      width: 100%;
    }
  }
</style>
