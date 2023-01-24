import styled from "styled-components";
import { colors, breakpoints } from "./themes";

export const Container = styled.div``;

export const Title = styled.h1``;

export const Description = styled.p``;

export const App = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  background-color: ${colors.red};
  height: 25vh;
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  height: 100vh;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
