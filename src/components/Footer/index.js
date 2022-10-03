import { useQuery } from "graphql-hooks";
import React from "react";
import { Container, Title, ItemsContainer, Item, IconsContainer, Icon } from './styles'

const FOOTER_QUERY = `query MyQuery {
  footer {
    title
    itemsMenu {
      item
      id
    }
    iconsMenu {
      icon {
        url
        alt
      }
      id
    }
  }
}`

const Footer = () => {
  const {loading, error, data} = useQuery(FOOTER_QUERY);

  if(loading) return 'Loading'
  if(error) return 'Something happend'
  return (
    <Container>
      <Title>{data.footer.title}</Title>
      <ItemsContainer>
        {data.footer.itemsMenu.map(({item, id}) => (
          <Item key={id}>{item}</Item>
        ))}
      </ItemsContainer>
      <IconsContainer>
        {data.footer.iconsMenu.map(({icon, id, alt}) => (
        <Icon key={id} src={icon.url}  alt={alt}/>
        ))}
      </IconsContainer>
    </Container>
  )
}

export default Footer