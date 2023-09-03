import { Link, ImageList, ImageListItem } from "@mui/material";

// IMAGE GRID
export default (props: ImageGridProps) => {
    return (
        <ImageList sx={{ height: 600, mt: 3 }} cols={2}>
            {props.generatedImages.map((imageURL: string, index: number) => (
                <ImageListItem key={index}>
                    <Link href={imageURL} download={`image-${index}.jpg`}>
                        <img
                            src={imageURL}
                            alt={`generated image #${index}`}
                            draggable="false"
                            loading="lazy"
                        />
                    </Link>
                </ImageListItem>
            ))}
        </ImageList>
    )
}
