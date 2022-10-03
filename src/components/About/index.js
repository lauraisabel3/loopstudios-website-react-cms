import React from "react";
import { useQuery } from 'graphql-hooks';
import { Container, Imagen,ContainerContent, Title, Content} from './styles'

const ABOUT_QUERY = `query MyQuery {
  about {
    image {
      url
    }
    title
    content
  }
}
`
const About = () => {
  const { loading, error, data } = useQuery(ABOUT_QUERY)
  
  if(loading) return 'Loading'
  if(error) return 'Something happened'
  return(
    <Container>
      <Imagen src={data.about.image.url} alt='header'></Imagen>
      <ContainerContent>
        <Title>{data.about.title}</Title>
        <Content>{data.about.content}</Content>
      </ContainerContent>
    </Container>
   )
}

export default About