import { Box, LinearProgress } from "@mui/material";
import '../styles/LoadingBar.less';

// LOADING BAR
export default (props: LoadingBarProps) => {
    return (
        <Box sx={{ mt: 5, mb: 2 }}>
            <LinearProgress variant="determinate" value={props.progress} />
        </Box>
    )
}
