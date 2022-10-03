import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  padding: 0 12px 80px;

  ${bp.desktop} {
    padding: 80px 60px;
  }
`

const Title = styled.h1 `
  margin: 40px 0;
  text-align: center;
  font-size: 3rem;
  font-family: var(--secondary);
  font-weight: 300;
  color: var(--black);

  ${bp.desktop} {
    margin: 0 0 60px;
    text-align: left;
  }
`

const CreationsContainer = styled.div `
  ${bp.desktop} {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`

const CreationContainer = styled.div `
  width: 100%;
  height: 120px;
  margin: 20px 0;
  position: relative;
  background-image: url(${props => props.src});
  background-size: cover;

  ${bp.desktop} {
    height: 360px;
    margin: 0;
    background-image: url(${props => props.srcDesktop});
  }
`

const CreationTitle = styled.h3 `
  width: 120px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 2rem;
  font-family: var(--secondary);
  font-weight: 200;
  line-height: 2.4rem;
  color: var(--white);
`

const ButtonContainer = styled.div `
  width: 120px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;

  ${bp.desktop} {
    padding: 0;
    position: absolute;
    right: 60px;
    top: 60px;
  }
`
const Button = styled.button `
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 2rem;
  background: var(--white);
  border: 1px solid (--black);
  cursor: pointer;

  :hover {
    color: var(--white);
    background: var(--black);
  }
`
export { Container, Title, ButtonContainer, Button, CreationsContainer, CreationContainer, CreationTitle}