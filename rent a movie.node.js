class Movie {
    constructor(title, genre, isAvailable = true) {
      this.title = title;
      this.genre = genre;
      this.isAvailable = isAvailable;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre) {
      const movie = new Movie(title, genre);
      this.movies.push(movie);
      console.log(`${title} added to the movie store.`);
    }
  
    rentMovie(title) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        if (movie.isAvailable) {
          movie.isAvailable = false;
          console.log(`${title} rented successfully.`);
        } else {
          console.log(`${title} is currently not available for rent.`);
        }
      } else {
        console.log(`${title} not found in the movie store.`);
      }
    }
  
    checkAvailableMovies() {
      const availableMovies = this.movies.filter(movie => movie.isAvailable);
      
      if (availableMovies.length > 0) {
        console.log("Available Movies:");
        availableMovies.forEach(movie => console.log(`- ${movie.title} (${movie.genre})`));
      } else {
        console.log("No movies available at the moment.");
      }
    }
  }
  
  // Example Usage
  const movieStore = new MovieStore();
  
  movieStore.addMovie("Inception", "Sci-Fi");
  movieStore.addMovie("The Shawshank Redemption", "Drama");
  movieStore.addMovie("The Dark Knight", "Action");
  
  movieStore.checkAvailableMovies();
  
  movieStore.rentMovie("Inception");
  movieStore.rentMovie("The Shawshank Redemption");
  
  movieStore.checkAvailableMovies();

  