// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


const topRatedMovies = movies.filter(movie => movie.rating >= 8);
console.log("Top Rated Movies:", topRatedMovies);


const formattedTitles = movies.map(movie => `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`);
console.log("Formatted Titles:", formattedTitles);


const recommend = (movie, minRating = 8) => movie.rating >= minRating;


console.log("Is 'Frozen' recommended?", recommend(movies[1]));     // false
console.log("Is 'Inception' recommended?", recommend(movies[0]));  // true
