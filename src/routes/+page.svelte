<script>
  import { onMount } from 'svelte';
  
  let year;
  
  onMount(() => {
    year = new Date().getFullYear();
  });
</script>

<div class="center">
  <div class="organizer">
    <div class="branding">
      <svg width="200.45224mm" height="61.565842mm" viewBox="0 0 200.45224 61.565842" xmlns="http://www.w3.org/2000/svg" style="fill:#fd3f92;fill-opacity:1;stroke-width:10.1711;" aria-label="Zach Heckert Branding Logo">
        <title>Zach Heckert Logo</title>
        <!-- Your SVG paths here -->
      </svg>
    </div>
    
    <div class="elementsSpacer">
      <div class="spacer">
        <div class="dropdown" tabindex="1">
          <i class="dd2" tabindex="1"></i>
          <a class="dropdown-button">projects</a>
          <div class="dropdown-content">
            <a href="https://mind-dump-2.netlify.app/" rel="noopener noreferrer" target="_blank">Blog (built with Svelte)</a>
            <a href="https://zheckert-todo.onrender.com" rel="noopener noreferrer" target="_blank">To-do List</a>
            <a href="https://zach-weather-app.netlify.app/" rel="noopener noreferrer" target="_blank">Weather</a>
            <a href="https://zach-svelte-weapon-generator.netlify.app/" rel="noopener noreferrer" target="_blank">Weapon Generator</a>
          </div>
        </div>
      </div>
      
      <div class="spacer">
        <a href="https://drive.google.com/file/d/1RDp8gO1ze-u2uvj1B0OSfGDPsuWWuiG1/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
      </div>
      
      <!-- GitHub Icon -->
      <div class="spacer">
        <a href="https://github.com/zheckert" rel="noopener noreferrer" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24" aria-label="GitHub Icon">
            <!-- Your GitHub SVG path -->
          </svg>
        </a>
      </div>
      
      <!-- LinkedIn Icon -->
      <div class="spacer">
        <a href="https://www.linkedin.com/in/zachheckert/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn Icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
            <!-- Your LinkedIn SVG path -->
          </svg>
        </a>
      </div>
    </div>
  </div>
  
  <footer>
    <div class="date">
      <span class="footer-spacer vert">©</span>
      <span class="footer-spacer">zach heckert</span>
      <span class="footer-spacer">{year}</span>
    </div>
  </footer>
</div>

<style>
  /* Your component-specific styles here if needed */
</style>
