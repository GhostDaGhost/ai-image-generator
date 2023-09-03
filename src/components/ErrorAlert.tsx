import { Alert } from "@mui/material"

// ERROR ALERT
export default (props: ErrorAlertProps) => {
    return (
        <Alert severity="error" sx={{ mb: 3 }} onClose={props.onClose}>
            {props.message}
        </Alert>
    )
}
