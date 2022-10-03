import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  padding: 60px 12px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white);

  ${bp.desktop} {
    padding: 40px 60px;
    align-items: start;
  }
`

const Title = styled.h1 `
  margin: 0 0 12px;
  font-size: 3rem;
`

const ItemsContainer = styled.div `
  ${bp.desktop} {
    width: auto;
    height: auto;
    display: flex;
  }
`
const Item = styled.h5 `
  margin: 12px 0;
  font-size: 1.6rem;
  font-weight: 400;

  ${bp.desktop} {
    margin: 0 20px 0 0;
  }
`

const IconsContainer = styled.div `
  width: auto;
  height: auto;
  margin-top: 40px;
  display: flex;

  ${bp.desktop} {
    margin-top: 0;
    position: absolute;
    top: 40px;
    right: 60px;
  }
`

const Icon = styled.img `
  width: 28px;
  height: 28px;
  margin: 0 12px;
`
export { Container, Title, ItemsContainer, Item, IconsContainer, Icon }