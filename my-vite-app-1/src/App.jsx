import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const colourArray = ["red", "green", "blue", "pink", "yellow"];

  const changeColor = (index) => {
    setColor(colourArray[index]);
  };

  return (
    <div>
      <Typography
        sx={{
          color: "black",
          textTransform: "capitalize",
          textAlign: "center",
          fontFamily: "-apple-system",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        Background color changer
      </Typography>
      <Box
        sx={{
          backgroundColor: color,
          widows: "inherit",
          border:'1px solid black',
          width: "100%",
          height: "40px",
        }}
      ></Box>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          justifySelf: "center",
        }}
      >
        {colourArray.map((colours, index) => (
          <Button
            sx={{
              color: "black",
              width: "100px",
              p: "5px",
              m: "20px",
              border: "2px solid ",
              borderColor: colourArray[index],
            }}
            onClick={() => changeColor(index)}
          >
            {colours}
          </Button>
        ))}
      </Box>
    </div>
  );
}

export default App;
