<script>
export default {
  name: 'page-about'
}
</script>

<template>
  <div class="about">
    <figure>
      <img src="//gravatar.com/avatar/f803c45d62a468e0cb990398c004bd3e?s=400" alt="Vinicius Reis">
      <figcaption>
        Vinicius Reis
      </figcaption>
    </figure>
    <p>
      Sou Full-Stack Severino-Developer, casado e pai uma filha linda. <br>
      Gosto de filmes, livros, mangá, HQs, games… Ou seja, gosto de mais coisas do que tem tempo para fazê-las. <br>
      Gravo vídeos para o Codecasts e trabalha na Decision6 como Engenheiro de Aplicações.
    </p>
    <router-link :to="{ name: 'home' }" class="button">
      Início
    </router-link>
  </div>
</template>

<style lang="scss">
  figure {
    padding: 0;
    margin: 10px 0 0 0;
    img {
      max-width: 100%
    }
    figcaption {
      text-transform: uppercase;
      text-align: center;
      font-size: 2rem;
    }
  }
  p {
    color: #fff;
  }
  a {
    text-align: center;
    text-decoration: none;
  }
</style>
