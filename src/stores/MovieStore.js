import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: "Spider Man",
        overview: 'Overview Overview Overview',
        poster_path: '/sdfkljlsd.jpg',
        release_date: '2002-05-01',
        isWatched: false 
      },
      {
        id: 2,
        original_title: "The Batman",
        overview: 'Overview2 Overview2 Overview2',
        poster_path: '/sdfkljldsfdssd.jpg',
        release_date: '20022-03-01',
        isWatched: true 
      }
    ]
  })
})