import React, { useState } from "react";
import DialogBox from "../DialogBox/DialogBox";

const Projects = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const customDialogContent = <div>Projects</div>;

  return (
    <div>
      <button onClick={openDialog}>Projects Button</button>
      <DialogBox
        isOpen={isDialogOpen}
        onClose={closeDialog}
        content={customDialogContent}
      />
    </div>
  );
};

export default Projects;
