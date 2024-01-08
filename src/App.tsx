import { useLocation, useRoutes } from "react-router-dom"
import { router } from "./router"
import './assets/style.css'
import { useLayoutEffect } from "react"

function App() {

  const {pathname} = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({top: 0})
  }, [pathname])

  return (
    <div>{useRoutes(router)}</div>
  )
}

export default App
