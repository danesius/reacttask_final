import Image from "next/image";
import { Container, ImageContainer, Text, TextContainer, Title } from "./elements";

export const Card = ({ image, title, text, }) => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            </ImageContainer>
            <TextContainer>
                <Title >{title}</Title>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    );
};