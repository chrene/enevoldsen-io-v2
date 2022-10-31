import React from "react";
import MainImage from "./main-image";
import ReactPlayer from "react-player";

const serializers = {
  types: {
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => (
      <ReactPlayer className="mt-6 mb-6" url={node.url} controls />
    ),
  },
};

export default serializers;
