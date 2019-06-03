import React from "react";
import styled from "styled-components/macro";
// import Overdrive from "react-overdrive";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  padding: 0 1rem;
  height: 231px;
  width: 154px;
  object-fit: cover;
`;

// const Thumbnail = ({ movie }) => (
//   <Link to={`/${movie.id}`}>
//     <Overdrive id={`${movie.id}`}>
//       <Poster alt={movie.title} src={`${POSTER_PATH}/${movie.poster_path}`} />
//     </Overdrive>
//   </Link>
// );

const Thumbnail = ({ media, netflix }) => (
  <Poster
    alt={media.title}
    src={netflix ? media.image : `${POSTER_PATH}/${media.poster_path}`}
  />
);

export default Thumbnail;
