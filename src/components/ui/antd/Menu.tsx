import {Menu as MenuA, MenuProps as MenuPropsA} from 'antd'

type MenuProps = MenuPropsA & {
  // Menu
}

export const Menu = (props: MenuProps) => {
  return <MenuA {...props} />
}