const isMovie = component => {
  const paths = ["movie", "popularMovies"];
  // if (
  //   component.props.history.location.pathname.includes(
  //     "movie" || "popularMovies"
  //   )
  // ) {
  //   console.log("is movie");
  //   return true;
  // } else {
  //   return false;
  // }
  const currentURL = component.props.history.location.pathname;
  return paths.some(path => currentURL.includes(path));
};

export { isMovie };
