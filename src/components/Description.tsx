import { Box, Typography } from "@mui/material";

// DESCRIPTION
export default () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box sx={{ maxWidth: 700, my: 3, p: 2, borderRadius: 1, bgcolor: 'black' }}>
                <Typography variant="subtitle1" gutterBottom>
                    Welcome to my AI image generator! This is a very simple tool to use. Simply put in a description of what you want
                    the image to look like and then the AI will generate four samples for you! (Example: Man with sunglasses and a white beard holding a dog)
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Hint: You can click on an image to download it!
                </Typography>
            </Box>
        </Box>
    )
}
