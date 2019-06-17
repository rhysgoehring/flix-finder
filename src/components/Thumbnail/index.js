import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  /* padding: 0 1.7rem; */
  height: 23.1rem;
  /* width: 300px; */
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const TitleOverlay = styled.h1`
  color: white;
  margin-top: -3rem;
`;

const Thumbnail = ({ media, netflix, show }) => (
  <Link to={show ? `show/${media.id}` : `movie/${media.id}`}>
    <Poster
      alt={media.title}
      src={netflix ? media.image : `${POSTER_PATH}/${media.poster_path}`}
      // src={netflix ? media.image : `${BACKDROP_PATH}/${media.backdrop_path}`}
    />
    {/* <TitleOverlay>{media.title}</TitleOverlay> */}
  </Link>
);

export default Thumbnail;
