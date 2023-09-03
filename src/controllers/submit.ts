import { GetRandomIntInRange } from "./utils";

// MAX AMOUNT OF IMAGES THAT CAN BE GENERATED
const maxAmountOfImages: number = 4;

/**
    * A function that is triggered when the description input is filled out and the submit button is pressed.
    * @param event `any` - The document element's event.
    * @param setAiResponse `Function` - The function to save the images.
    * @param setLoadingState `Function` - The function to start or end the loading spinner.
    * @param setErrorMessage `Function` - The function to summon an alert in the event of an error.
    * @param setLoadingProgress `Function` - The function to update the progress of generation.
    * @returns `void` - This returns nothing.
    * @example SubmitDescriptionToAI(event, setAiResponse, setLoadingState, setErrorMessage);
*/
export const SubmitDescriptionToAI = async (event: any, setAiResponse: Function, setLoadingState: Function, setErrorMessage: Function, setLoadingProgress: Function) => {
    const formData = new FormData(event.target);

    // CANCEL DEFAULT BEHAVIOR OF SUBMISSION
    event.preventDefault();

    // VALIDATE PARAMETERS
    const dataToSend = Object.fromEntries(formData);
    if (!dataToSend.imagedescription || dataToSend.imagedescription === '') {
        setErrorMessage('Your description cannot be empty!');
        return;
    }

    // SET LOADING STATE
    setLoadingState(true);
    setLoadingProgress(false);
    setErrorMessage('');

    // GENERATE A TOTAL NUMBER OF, WHATEVER THE MAX IS, IMAGES
    let imageLinks: string[] | null = [];
    for (let i = 0; i < maxAmountOfImages; i++) {
        const apiResult = await fetch('https://api-inference.huggingface.co/models/prompthero/openjourney-v4', {
            headers: { Authorization: `Bearer ${import.meta.env.VITE_GENERATOR_API_KEY}` },
            method: 'POST',
            body: JSON.stringify({ inputs: `${dataToSend.imagedescription} ${GetRandomIntInRange(1, 10000)}` })
        });

        // CONTINUE PROGRESS
        setLoadingProgress(25 * (i + 1));

        // VERIFY THAT THE API REQUEST WAS A SUCCESS
        if (apiResult && typeof apiResult === 'object' && apiResult.ok && apiResult.status == 200) {
            const imageBlob = await apiResult.blob();
            const imageLink = URL.createObjectURL(imageBlob);

            // CACHE NEWLY GENERATED IMAGE LINK
            imageLinks?.push(imageLink);
        } else {
            imageLinks = null;
            setErrorMessage('An error has occurred with the API request!');
        }
    }

    // SET AI RESPONSE STATE
    setAiResponse(imageLinks);
    setLoadingState(false);
    setLoadingProgress(0);
}
