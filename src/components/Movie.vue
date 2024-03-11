<script setup>
import {useMovieStore} from '../stores/MovieStore.js'
const movieStore = useMovieStore()
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie__img"
    />
    <div class="">
      <div class="movie__name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie__overview">{{ movie.overview }}</span>
      <div class="movie__buttons">
        <button @click="movieStore.toggleWatched(movie.id)" class="btn movie__buttons_watched">
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button @click="movieStore.deleteMovie(movie.id)" class="btn movie__buttons_delete">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.movie {
  padding: 10px;
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  border-radius: 10px;

  &__accept {
    margin-right: 10px;
  }
  &__img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  &__name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &__overview {
    display: block;
    margin-bottom: 20px;
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    &_watched {
      color: #fff;
      background-color: #1eb4c3;

      &_icon {
        width: 15px;
        margin-left: 10px;
      }
    }
    &_delete {
      color: #fff;
      background-color: #ff2a2a;
    }
  }
}
</style>
