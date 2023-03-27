import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  width: 100%;

  }

  ${mobile({ justifyContent: "center" })}
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
  border-radius: 10px;
  flex: 1;
`;

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
  flex: 4;
`;

export const Title = styled(({ ...props }) => <h3 {...props} />)`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: bold;
  border-bottom: ${(props) =>
        props.underline === "true" && "2px solid #92dbea"};
  width: 55px;
`;

export const Text = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
`;

