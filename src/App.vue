<script setup lang="ts">
import { useMovieStore } from "./stores/MovieStore.js";
import Movie from "./components/Movie.vue";
const movieStore = useMovieStore();
</script>
<template>
  <div class="container">
    <header class="header">
      <img src="/logo.png" alt="logo" class="header__logo" />
      <h1 class="header__title">Movies List</h1>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">
        Favorite
      </button>
      <button :class="['btn', {btn_green: movieStore.activeTab === 2}]">Search</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>All movies</h3>
      <Movie
        v-for="movie of movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div class="search" v-else-if="movieStore.activeTab === 2">Search</div>
  </div>
</template>
<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &__logo {
    max-width: 50px;
    margin-right: 10px;
  }
  &__title {
    font-size: 30px;
    font-weight: 700;
  }
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #efefef;

  &:hover {
    opacity: 0.7;
  }
  &_green {
    background-color: #37df5c;
  }
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
