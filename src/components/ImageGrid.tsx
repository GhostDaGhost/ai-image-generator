import { Link, Box } from "@mui/material";

// IMAGE GRID
export default (props: ImageGridProps) => {
    return (
        <Box sx={{ mt: 3, p: 2, borderRadius: 1, bgcolor: 'black' }}>
            <Box display="grid" sx={{ gap: '2vmin', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {props.generatedImages.map((imageURL: string, index: number) => (
                    <Link key={index} href={imageURL} download={`image-${index}.jpg`}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={imageURL}
                            alt={`generated image #${index}`}
                            draggable="false"
                            loading="lazy"
                        />
                    </Link>
                ))}
            </Box>
        </Box>
    )
}
