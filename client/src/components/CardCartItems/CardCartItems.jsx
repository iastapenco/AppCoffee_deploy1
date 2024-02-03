import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardCartItems = ({ data }) => {
  return (
    <Card
      sx={{ width: 300 }}
      style={{
        backgroundColor: "#007bff",
        mx: "auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ width: 200, height: 150 }}
          component="img"
          image={data.id_prod.thumbnails}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "white" }}
          >
            {data.id_prod.title}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }}>
            Cantidad: {data.quantity} | precio: {data.id_prod.price}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }}>
            subtotal: {data.quantity * data.id_prod.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCartItems;
