import React from 'react'
import { useQuery } from 'graphql-hooks';
import { Container, Title, ButtonContainer, Button, CreationsContainer,CreationContainer, CreationTitle} from './styles'

const CREATIONS_QUERY = `query MyQuery {
  allCreations {
    id
    title
    background {
      url
    }
    backgroundDesktop {
      url
    }
  }
}`

const Creations = () => {
  const {  loading, error, data } = useQuery(CREATIONS_QUERY)
  
  if(loading) return 'Loading'
  if(error)  return 'Something happened'
  return(
    <Container>
      <Title>OUR CREATIONS</Title>
      <CreationsContainer>
        {data.allCreations.map(({id,title, background, backgroundDesktop}) => (
          <CreationContainer src={background.url} key={id} srcDesktop={backgroundDesktop.url}>
            <CreationTitle>{title}</CreationTitle>
          </CreationContainer>
        ))}
      </CreationsContainer>
      <ButtonContainer>
        <Button>SEE ALL</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Creations