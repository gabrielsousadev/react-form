import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box
      className="box"
      sx={{
        width: 500,
        height: 500,
        backgroundColor: "white",
      }}
    >
      <div>
        <h1 className="title">Register form</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="name">
          <TextField
            {...register("firstName", { required: "First name is required." })}
            helperText={errors.firstName?.message?.toString()}
            label="First Name"
            variant="filled"
          />
          <TextField
            {...register("lastName", {
              required: "Last name is required.",
              minLength: { value: 4, message: "Minimum length is 4" },
            })}
            helperText={errors.lastName?.message?.toString()}
            label="Last Name"
            variant="filled"
          />
        </div>
        <div>
          <TextField className="email"
            {...register("email", { required: "Email is required." })}
            helperText={errors.email?.message?.toString()}
            label="E-mail"
            variant="filled"
          />
        </div>
        <div className="country">
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="country">Country</InputLabel>
            <Select labelId="country" label="country" {...register("country", {required: "Country is required."})}>
              <MenuItem value="united states">United States</MenuItem>
              <MenuItem value="brazil">Brazil</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
            </Select>
            <FormHelperText>{errors.country?.message?.toString()}</FormHelperText>
          </FormControl>
        </div>
        <div>
            
        </div>
        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Form;
