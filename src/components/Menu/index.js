import { useQuery } from 'graphql-hooks'
import React  from 'react'
import { Item } from './styles'
// import  ReactDOM  from 'react-dom'
import  Modal  from '../Modal'

const MENU_QUERY = `query MyQuery {
  menu {
    itemMenu {
      item
      id
    }
  }
}`


const Menu = () => {
  const { loading, error, data} = useQuery(MENU_QUERY)


  if(loading) return 'Loading';
  if(error) return 'Something bad happened';
  return (
    <Modal>
      {data.menu.itemMenu.map(({item, id}) => (
        <Item key={id}>{item}</Item>
      ))}
    </Modal>
  )
}

export default Menu