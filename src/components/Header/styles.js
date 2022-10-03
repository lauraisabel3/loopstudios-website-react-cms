import styled from "@emotion/styled";
import { breakPoints as bp} from "../../styles/breakPoints";
import background from '../../assets/mobile/image-hero.jpg'

const Container = styled.div `
  width: 100%;
  height: 400px;
  position: relative;
  padding: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  ${bp.desktop} {
    padding: 40px 60px;
  }
`

const Header = styled.div `
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.span `
  width: 120px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  z-index: 1;

  ${bp.desktop} {

  }
`

const IconMenu = styled.span `
  width: 24px;
  height: 20px;
  background-image: url(${props => props.url});
  background-size: cover;
  z-index: 1;
  cursor: pointer;

  ${bp.desktop} {
    display: none;
  }
`

const Title = styled.div `
  width: 100%;
  height: auto;
  padding:12px;
  border: 1px solid var(--white);

  h1 {
    font-size: 2rem;
    font-family: var(--secondary);
    font-weight: 300;
    color: var(--white);
    line-height: 2.4rem;
  }

  ${bp.desktop} {
    width: 300px;
    padding: 20px;

    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
`
export { Container, Header, Logo, IconMenu, Title }