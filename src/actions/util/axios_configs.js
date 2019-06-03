// uNogs Unofficial Netlix API:
const netflixConfig = {
  headers: {
    "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY
  }
};

// Entertrainment Data Hub API (for Streaming Service Availability):
const edhConfig = {
  headers: {
    "X-RapidAPI-Host":
      "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "Content-Type": "application/json"
  }
};

// IMDB API:
const imdbConfig = {
  headers: {
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY
  }
};

// Utelly API - for Streaming Service Availability:
const utellyConfig = {
  headers: {
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY
  }
};

export { netflixConfig, edhConfig, imdbConfig, utellyConfig };
