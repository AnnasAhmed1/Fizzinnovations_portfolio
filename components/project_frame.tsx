import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
// import '../styles/styles.css';
const ProjectFrame = ({video}:{video?:any}) => {
  return (
    <>
      <iframe
        className="rounded-2xl w-full h-full border-2 border-black"
        src={`https://drive.google.com/file/d/${video?.urlId}/preview`}
        title="description"
      />
    </>
  );
};

export default ProjectFrame;
