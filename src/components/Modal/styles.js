import styled from "@emotion/styled";
import { breakPoints as bp} from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: 100vh;
  position: absolute;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black);
  z-index: 1;

 ${bp.desktop} {
  width: auto;
  height: auto;
  padding: 0;
  position: absolute;
  top: 40px;
  right: 60px;
  flex-direction: row;
  background: none;
 }
`

export { Container}