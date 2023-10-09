import { useState } from "react"

function Navbar({setPage}) {
    const [showMenu, setShowMenu] = useState('inactive')
    function toggleMenu(){
        if(showMenu === 'active'){
            setShowMenu('inactive')
        }
        if(showMenu === 'inactive'){
            setShowMenu('active')
        }
        console.log('action');
    }
  return (
    <>
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
            <div className="nav-container">
                <a onClick={()=>{setPage("Home")}} aria-current="page" className="brand w-nav-brand w--current">
                    <div className="logo-wrapper">
                        <div className="logo-text black-100">Arturo Hernandez</div>
                        <div className="logo-description black-50">Web Developer</div>
                    </div>
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="nav-link-wrapper">
                        <a onClick={()=>{setPage("Home")}} aria-current="page" className="nav-link w-nav-link w--current">Home</a>
                        <a onClick={()=>{setPage("Works")}} className="nav-link w-nav-link">Work</a>
                        <a onClick={()=>{setPage("About")}} className="nav-link w-nav-link">About</a>
                    </div>
                    <a onClick={()=>{setPage("Contact")}} className="button w-button">Let &#x27;s Talk Now</a>
                </nav>
                <div className="menu-button w-nav-button" >
                    <div className="menu" onClick={toggleMenu}>Menu</div>
                </div>
            </div>
            <div className={showMenu==='active'?'':'inactive'}>
                <nav role="navigation" className="nav-menu w-nav-menu" data-nav-menu-open="">
                    <div className="nav-link-wrapper">
                        <a onClick={()=>{setPage("Home")}} className="nav-link w-nav-link w--nav-link-open">Home</a>
                        <a onClick={()=>{setPage("Works")}} className="nav-link w-nav-link w--nav-link-open">Work</a>
                        <a onClick={()=>{setPage("About")}} className="nav-link w-nav-link w--nav-link-open">About</a>
                    </div>
                    <a onClick={()=>{setPage("Contact")}} aria-current="page" className="button w-button w--current">Let's Talk Now</a>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar