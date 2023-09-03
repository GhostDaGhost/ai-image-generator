interface InputBoxProps {
    isLoading: boolean;
    onSubmitButtonClick: any;
}

interface ImageGridProps {
    generatedImages: any;
}

interface SubmitButtonProps {
    isLoading: boolean;
}

interface LoadingBarProps {
    progress: number;
}

interface ErrorAlertProps {
    message: string;
    onClose: any;
}
