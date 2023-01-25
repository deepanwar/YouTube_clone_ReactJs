import React from "react";
import { useParams } from "react-router-dom";

const Explore = () => {
  const { term } = useParams();
  return <div>Explore {term}</div>;
};

export default Explore;
