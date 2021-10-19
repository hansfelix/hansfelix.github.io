<template>
  <HomeBlockTemplate id="portfolio">
    <div class="portfolio-section">
      <h2 class="portfolio-section__title">
        {{ $t('portfolio.title') }}
      </h2>
      <p class="index-contact__text">
        If you wanna get in touch, talk to me about a project collaboration or
        just say hi, send me an email to hansfelixramos@gmail.com I'll try my
        best to get back to you! We can also be in contact through any of my
        social networks
      </p>
      <div class="projects">
        <section v-for="project in projects" :key="project.id" class="project">
          <img class="project_image" :src="project.img" />
          <h3>{{ project.name }}</h3>
        </section>
      </div>
    </div>
  </HomeBlockTemplate>
</template>

<script>
import HomeBlockTemplate from './HomeBlockTemplate.vue'
export default {
  components: {
    HomeBlockTemplate
  },
  data () {
    return {
      projects: [
        {
          id: '0',
          name: 'Carta Balance',
          img: 'https://via.placeholder.com/350x150',
          description: '',
          link: '',
          githubRepo: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.portfolio-section {
  min-height: 100vh;

  &__title {
    color: var(--accent-color);
  }
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.5rem;
}

.project {
  //border: 1px solid white;
  border-radius: 5px;
  padding: 0.5rem;
  background: var(--constrast-background-color-25);

  &_image {
    opacity: 0.2;
    width: 100%;
  }

  &:hover {
    .project_image {
      opacity: 0.8;
    }
  }
}
</style>
