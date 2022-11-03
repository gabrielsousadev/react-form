import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import "./form.css";

const Form = () => {
  return (
        <Box
        sx={{
            width: 500,
            height: 500,
            backgroundColor: "primary.dark",
        }}
        >
        <div>
            <h1 className="title">Register form</h1>
        </div>
        </Box>
  );
};

export default Form;
