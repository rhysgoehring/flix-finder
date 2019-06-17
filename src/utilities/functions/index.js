const isMovie = component => {
  const paths = ["movie", "popularMovies"];

  const currentURL = component.props.history.location.pathname;
  return paths.some(path => currentURL.includes(path));
};

// eslint-disable-next-line import/prefer-default-export
export { isMovie };
