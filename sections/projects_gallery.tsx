import { H1 } from "@/components/helper";
import ProjectFrame from "@/components/project_frame";
import { Grid } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";

const ProjectsGallery = () => {
  const projects = [
    {
      urlId: "1zDAQlCZoezhDFHhIB7h6VHVtyLUc-lAi",
    },
    {
      urlId: "1LgXk0FoVVG52dIReGj67zPvic51NREnD",
    },
    {
      urlId: "1gozu2sdo17THQES5CAvWgB2F1mGd8yMg",
    },
    {
      urlId: "1sj0cG2Kds0IGR4E0_C4deuUMM7o-DbL6",
    },
    {
      urlId: "1uh4QVfW0mau7DdESkVz6YT11pL45dv-7",
    },
  ];
  return (
    <div id="projects" className="px-[10%]">
      <H1
        initialText="Our"
        colouredText=" Recent "
        endText="Projects"
        className="text-center
      mt-[60px]
      mb-[40px]
      "
      />
      <Grid container spacing={3}>
        {projects?.map((video, i) => (
          <Grid
            // className="h-[300px max-lg:h-[400px] max-md:h-[300px] max-sm:h-[200px]"
            className={`${styles.footerGrid}`}
            // style={{ height: "300px" }}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            item
          >
            <ProjectFrame video={video} />
          </Grid>
        ))}
      </Grid>
      {/* <Row></Row> */}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProjectsGallery;
