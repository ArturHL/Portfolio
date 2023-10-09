function Footer({setPage}) {
  return (
    <>
        <section className="footer">
            <div className="footer-container">
                <div className="footer-top-menu">
                    <div className="logo-wrapper">
                        <div className="logo-text white-100">Arturo Hernandez</div>
                        <div className="logo-description white-50">Web Developer</div>
                    </div>
                    <div className="link-wrapper">
                        <a href="https://www.instagram.com/" className="footer-link">Github</a>
                        <a href="https://www.instagram.com/" className="footer-link">Instagram</a>
                        <a href="https://twitter.com" className="footer-link">Twitter</a>
                        <a href="https://www.linkedin.com/" className="footer-link">Linkedln</a>
                        <a href="https://www.linkedin.com/" className="footer-link">Facebook</a>
                    </div>
                </div>
                <div className="footer-contact-block">
                    <div className="standard-text white-50">Have an interesting idea ?</div>
                    <div data-w-id="7aa46071-e745-9c65-da56-4bab7a98d5da" className="contact-link-wrapper">
                        <a onClick={()=>{setPage("Contact")}} className="extra-large-text white-100">Let’s connect</a>
                    </div>
                </div>
                <div className="footer-bot-menu">
                    <div className="standard-text white-50">Desing by Arturo Hernandez © 2023</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer