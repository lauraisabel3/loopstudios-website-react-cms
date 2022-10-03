import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";
import { Link } from 'react-router-dom'

const Item = styled(Link) `
  margin: 12px 0;
  font-size: 3rem;
  font-weight: 300;
  color: var(--white);
  text-decoration: none;
  cursor: pointer;

  ${bp.desktop} {
    margin: 0 16px;
    font-size: 1.6rem;
  }
`

export { Item }