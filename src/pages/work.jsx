import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Work from "../components/work/workContainer"
import PropTypes from 'prop-types'

WorkPage.propTypes = {
    page: PropTypes.string.isRequired,
    setPage: PropTypes.string.isRequired
}

function WorkPage({page, setPage}) {
  return (
    <>
        <Navbar setPage={setPage}/>
        <section>
            <div className="container divider-bot">
                <div data-w-id="09d729d0-4dcf-81ec-c459-b3f017a90678" className="page-heading-wrapper">
                    <h1>Work</h1>
                </div>
            </div>
        </section>
        <Work page={page}/>
        <Footer setPage={setPage}/>
    </>
  )
}

export default WorkPage