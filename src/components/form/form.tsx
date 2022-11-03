import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import "./form.css";

const Form = () => {
  return (
        <Box className="box"
        sx={{
            width: 500,
            height: 500,
            backgroundColor: "white",
        }}
        >
        <div>
            <h1 className="title">Register form</h1>
        </div>
        <div className="name">
            <TextField id="" label="First Name" variant="filled" />
            <TextField id="" label="Last Name" variant="filled" />
        </div>
        </Box>
  );
};

export default Form;
