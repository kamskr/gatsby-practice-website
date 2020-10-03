import React from "react"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
)

export default MainLayout
