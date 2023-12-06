import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () => {
  return (
    <div>
      <div className="felx flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_1280.jpg"
        >
        </Avatar>
        <p>Rohit</p>
      </div>
    </div>
  );
};

export default StoryCircle;
