import Image from "next/image";


import {
  Container,
  Heading,
  InfoContainer,
  ImageContainer,
  CardContainer,
  Subheading,
  Header,
  StyledCard
} from "./elements";

export const Main = ({ image, data, ...props }) => {
  return (
    <Container {...props}>
      <Header>
        <Heading>Manage agency selection</Heading>
        <Subheading>Stregthen your onboarding process</Subheading>
      </Header>
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
            <StyledCard
              key={d.id}
              image={d.image}
              title={d.title}
              text={d.text}

            />
          ))}
        </CardContainer>
      </InfoContainer>
    </Container>
  );
};
