import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 60px 12px;
  position: relative;

  ${bp.desktop} {
    height: 500px;
    display: flex;
    padding: 80px;
  }
`

const Imagen = styled.img `
  width: 100%;
  height: 200px;
  object-fit: cover;

  ${bp.desktop} {
    width: 60%;
    height: 100%;
  }
`

const ContainerContent = styled.div `
  ${bp.desktop} {
    width: auto;
    background-color:var(--white);
    position: absolute;
    bottom: 20px;
    right: 80px;
    padding: 40px;
}
`
const Title = styled.h1 `
  width: 300px;
  margin: 24px auto 20px;
  font-size: 3rem;
  font-weight: 300;
  font-family: var(--secondary);
  color: var(--black);
  line-height: 3.6rem;
  text-align: center;

  ${bp.desktop} {
    width: 400px;
    margin: 0;
    font-size: 4rem;
    text-align: left;
  }
`

const Content = styled.p `
  width: 300px;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--dark-gray);
  line-height: 2.4rem;
  text-align: center;

  ${bp.desktop} {
    width: 400px;
    margin: 20px 0 0 0;
    text-align: left;
  }
`

export { Container, Imagen, Title, Content, ContainerContent}