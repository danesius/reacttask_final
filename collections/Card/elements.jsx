import styled from "styled-components";


export const Container = styled(({ ...props }) => <div {...props} />)`
display: flex;
background: rgba(244, 244, 244, 255);
border-radius: 15px;
border: 2px solid transparent;
padding:1rem;
:hover {
border: 2px solid #1e7efb;

h3 {
  color: #1e7efb;
  text-decoration: underline;
}
cursor: pointer;
}
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
justify-content: center;
align-self: center;
width:12rem;

`;

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
display: flex;
flex-direction: column;
color: black;
font-family: sans-serif;


`;

export const Title = styled(({ ...props }) => <h3 {...props} />)`
  font-family: Poppins;
  font-size: 1.25rem;
  
  font-weight: bold;
 
 margin:0;

`;

export const Text = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
 
  font-weight: 400;
  color: black;
`;

