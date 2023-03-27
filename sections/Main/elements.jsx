import styled from "styled-components";
import { mobile } from "../../responsive";
import { Card } from "../../collections/Card/Card";
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
} from "~/components";

export const Container = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
flex-direction: column;
gap: 3rem;
align-items: center;
background-image: url("/img/background.png");
background-size: contain;
background-repeat: no-repeat;
margin-top: 3rem;
`;

export const Heading = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;

`;
export const Header = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
    flex-direction: column;
  `;

export const Subheading = styled((props) => <SectionSubheading {...props} />)`
 
  text-align: center;
`;

export const InfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  margin: 0px 5rem;
  margin-bottom: 5rem;
  ${mobile({ flexDirection: "column", margin: "0 0" })}
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
align-self: center;
max-width: 25rem;
max-height: 45rem;
width: 100%;
height: 100%;
`;

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
gap: 2rem;

@media (min-width: 1024px) {
 gap: 4rem;
 justify-content: space-evenly;
}


`;
export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
 
 ` ;