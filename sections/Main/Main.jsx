import Image from "next/image";
import { Card } from "../../collections/Card/Card"

import {
  Container,
  Heading,
  InfoContainer,
  ImageContainer,
  CardContainer,
  Subheading,
} from "./elements";

export const Main = ({ image, data, ...props }) => {
  return (
    <Container {...props}>
      <Heading>Manage agency selection</Heading>
      <Subheading>Stregthen your onboarding process</Subheading>
      <InfoContainer>
        <ImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </ImageContainer>
        <CardContainer>
          {data.map((d) => (
            <Card
              key={d.id}
              image={d.image}
              title={d.title}
              description={d.description}
              underline={d.underline}
            />
          ))}
        </CardContainer>
      </InfoContainer>
    </Container>
  );
};
