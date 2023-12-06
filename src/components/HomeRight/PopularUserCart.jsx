import { Avatar, Button, CardHeader} from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";

const PopularUserCart = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<Button size="small">Follow</Button>}
        title="Ritik Bhateley"
        subheader="@ritik007"
      />
    </div>
  );
};

export default PopularUserCart;
