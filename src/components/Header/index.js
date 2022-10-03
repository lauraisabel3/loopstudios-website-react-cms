import { useQuery } from "graphql-hooks";
import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import { Container, Header, Logo, IconMenu, Title } from './styles'

const HEADER_QUERY = ` query MyQuery {
  header {
    logo {
      url
    }
    iconHamburguer {
      url
    }
    title
    background {
      url
    }
    backgroundDesktop {
      url
    }
  }
}`


const HeaderComponent = () => {
  const { loading, error, data} = useQuery(HEADER_QUERY)
  const [menuVisibility, setMenuVisibility] = useState(false)

  const isBrowser = typeof window !== "undefined"

  let width;
    if(isBrowser) {
        width= window.innerWidth
    }

  const [screenWidth, setScreenWidth] = useState(width);
    

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
        }
    }, [])
  
    const handleMenu = () => {
    setMenuVisibility(!menuVisibility)
  }


  if(loading) return 'Loading'
  if(error) return 'Something bad happened'
  const title = data.header.title.split(' ');
  return (
    <Container src={data.header.background}>
      <Header>
        <Logo url={data.header.logo.url} />
        <IconMenu url={data.header.iconHamburguer.url} onClick={handleMenu}/>
      </Header>
      <Title>{title.map(el => <h1 key={el}>{el}</h1>
      )}</Title>
      {(menuVisibility || screenWidth > 1024) &&
        <Menu/>
      }
    </Container>
  )
}

export default HeaderComponent