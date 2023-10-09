import { useState } from "react"
import Home from "./pages/home"
import WorkPage from "./pages/work"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"

function App() {
  const [page, setPage] = useState('Home')

  function validatePage(page, set){
    if(page === 'Home'){
      return(<Home page={page} setPage={set}/>)
    }
    if(page === 'Works'){
      return(<WorkPage page={page} setPage={set}/>)
    }
    if(page === 'About'){
      return(<AboutPage setPage={set}/>)
    }
    if(page === 'Contact'){
      return(<ContactPage setPage={set}/>)
    }
  }

  return (
    <>
      {validatePage(page, setPage)}
    </>
  )
}

export default App
