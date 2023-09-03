import { InputAdornment, Button } from "@mui/material";

// SUBMIT BUTTON
export default (props: SubmitButtonProps) => {
    return (
        <InputAdornment position="start">
            <Button type="submit" variant="outlined" disabled={props.isLoading}>Submit</Button>
        </InputAdornment>
    )
}
