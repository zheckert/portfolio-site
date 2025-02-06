<script>
  import { projects } from '$lib/data/projects';
</script>

<div class="projects-container">
  {#each projects as project}
    <div class="project-row">
      <div class="project-info">
        <h2 class="project-title">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h2>
        <div class="tech-stack">
          {#each project.tech as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
      <div class="project-description">
        {project.description}
      </div>
    </div>
  {/each}
</div>

<style>
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
  }

  .project-row {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* Splits row into two equal halves */
    gap: 2rem;
    padding: 1rem;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .project-title {
    font-size: 1.5rem;
    margin: 0;
  }

  .project-title a {
    color: var(--portfolio-primary);
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .project-title a:hover {
    opacity: 0.7;
  }

  .tech-stack {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tech-tag {
    background-color: var(--portfolio-primary);
    color: var(--portfolio-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
  }

  .project-description {
    line-height: 1.6;
  }

  /* Make it responsive */
  @media (max-width: 768px) {
    .project-row {
      grid-template-columns: 1fr;  /* Stack vertically on mobile */
      gap: 1rem;
    }
  }
</style>
