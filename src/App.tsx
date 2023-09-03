import { Box } from "@mui/material";
import { useState } from "react";
import { SubmitDescriptionToAI } from "./controllers/submit";

import Header from "./components/Header";
import Description from "./components/Description";
import InputBox from "./components/InputBox";
import ImageGrid from "./components/ImageGrid";
import LoadingBar from "./components/LoadingBar";
import ErrorAlert from "./components/ErrorAlert";

// APP
export default () => {
    const [aiResponse, setAiResponse] = useState<string[] | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setLoadingState] = useState(false);

    // ON SUBMIT BUTTON CLICK
    const onSubmitButtonClick = (event: any) => SubmitDescriptionToAI(event, setAiResponse, setLoadingState, setErrorMessage, setLoadingProgress);

    // RETURN ELEMENT
    return (
        <Box display="flex" justifyContent="center">
            <Box
                sx={{
                    top: 30,
                    position: 'relative',
                    p: 3,
                    mb: 8,
                    color: 'white',
                    bgcolor: 'rgba(0, 0, 0, .55)',
                    borderRadius: 2,
                    border: '2px solid black'
                }}
            >
                {errorMessage !== '' && <ErrorAlert message={errorMessage} onClose={() => setErrorMessage('')} />}

                {/* MAIN COMPONENTS */}
                <Header />
                <Description />
                <InputBox isLoading={isLoading} onSubmitButtonClick={onSubmitButtonClick} />

                {/* GENERATED IMAGES GO HERE */}
                {isLoading && <LoadingBar progress={loadingProgress} />}
                {aiResponse !== null && <ImageGrid generatedImages={aiResponse} />}
            </Box>
        </Box>
    )
}
