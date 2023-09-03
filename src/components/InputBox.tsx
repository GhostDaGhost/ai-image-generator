import { Box, TextField } from "@mui/material";
import SubmitButton from "./SubmitButton";

// INPUT BOX
export default (props: InputBoxProps) => {
    return (
        <Box component="form" onSubmit={props.onSubmitButtonClick} sx={{ p: 1, borderRadius: 1, bgcolor: 'black' }}>
            <TextField
                id="imagedescription"
                name="imagedescription"
                autoComplete="imagedescription"
                fullWidth
                label="Enter description here"
                required
                disabled={props.isLoading}
                InputProps={{
                    endAdornment: <SubmitButton isLoading={props.isLoading} />
                }}
            />
        </Box>
    )
}
