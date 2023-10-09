import Navbar from '../components/navbar'
import Work from '../components/work/workContainer'
import AboutHome from '../components/about/aboutHome'
import Footer from '../components/footer'
import PropTypes from 'prop-types'

Home.propTypes = {
    page: PropTypes.string.isRequired,
    setPage: PropTypes.string.isRequired
}

function Home({page, setPage}) {
  return (
    <>
      <Navbar setPage={setPage}/>
      <section>
            <div className="container">
                <div className="hero-concent-wrapper">
                    <h1 className="hero-heading">Arturo Hernandez</h1>
                    <div className="hero-image-description-wrapper">
                        <div className="hero-image-wrapper">
                            <div id="w-node-_23251f7f-fe06-c946-74a4-52e770857971-0aea9fee" className="image-wrapper">
                                <img src="https://uploads-ssl.webflow.com/648e7068052fafd80aea9fea/648ea1e2c78f6d7a5ca0db4b_Hero%20Image%201.png" loading="lazy" width="68" alt=""/>
                                <div className="hero-image-mask-1"></div>
                            </div>
                            <div id="w-node-ad6c0d6f-d9bc-2b1f-eb46-0b372e0e2351-0aea9fee" className="image-wrapper">
                                <img src="https://uploads-ssl.webflow.com/648e7068052fafd80aea9fea/648ea1e2aeeeb6d0450b1c7d_Hero%20Image%202.png" loading="lazy" alt="" width="68"/>
                                <div className="hero-image-mask-2"></div>
                            </div>
                            <div id="w-node-_8b5b966f-14b9-258a-f61d-e4e7b44f9c5b-0aea9fee" className="image-wrapper">
                                <img src="https://uploads-ssl.webflow.com/648e7068052fafd80aea9fea/648ea1e232f94fd8cc45cc3a_Hero%20Image%203.png" loading="lazy" width="68" alt=""/>
                                <div className="hero-image-mask-3"></div>
                            </div>
                        </div>
                        <div className="standard-text black-50">I am a web developer and I feel more attraction for the backend, I really like logic problems and I am a fan of never stop learning.</div>
                    </div>
                </div>
            </div>
      </section>
      <Work page={page}/>
      <AboutHome/>
      <Footer setPage={setPage}/>
    </>
  )
}

export default Home