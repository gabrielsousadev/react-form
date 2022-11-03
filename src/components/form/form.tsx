import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

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
      <form onSubmit={handleSubmit((data) => {console.log(data)})}>
        <TextField {...register("firstName", {required: 'First name is required.'})} helperText={errors.firstName?.message?.toString()} label="First Name" variant="filled" />
        <TextField {...register("lastName", {required: 'Last name is required.', minLength: {value: 4, message: "Minimum length is 4"}})} helperText={errors.lastName?.message?.toString()} label="Last Name" variant="filled" />
        <TextField {...register("email", {required: 'Email is required.'})} helperText={errors.email?.message?.toString()} label="Last Name" variant="filled" />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Form;
