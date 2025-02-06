<script>
  import '../app.css';
</script>

<header>
  <nav>
    <div class="container">
      <div class="branding">Branding!</div>
      <div class="nav-content">
        <div class="nav-links">
          <a href="https://drive.google.com/file/d/1RDp8gO1ze-u2uvj1B0OSfGDPsuWWuiG1/view?usp=sharing" 
             class="nav-item" 
             rel="noopener noreferrer" 
             target="_blank">resume</a>
          <a href="https://github.com/zheckert" 
             class="nav-item"
             rel="noopener noreferrer" 
             target="_blank">github</a>
          <a href="https://www.linkedin.com/in/zachheckert/" 
             class="nav-item"
             rel="noopener noreferrer" 
             target="_blank">linkedin</a>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    width: 100%;
    padding: 1rem;
    background-color: var(--portfolio-secondary);
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-end;
  }

  /* .branding {
    todo: decide if I want to keep this
  } */

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-item {
    color: var(--portfolio-primary);
    text-decoration: none;
    font-size: 1.1rem;
    transition: opacity 0.2s;
  }

  .nav-item:hover {
    opacity: 0.7;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  /* Add responsive styles */
  @media (max-width: 768px) {
    .nav-links {
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    nav {
      padding: 0 1rem;
    }
  }
</style> 