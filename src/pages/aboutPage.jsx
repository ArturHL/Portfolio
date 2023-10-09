import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function AboutPage({setPage}) {
  return (
    <>
        <Navbar setPage={setPage}/>
        <section>
            <div className="container divider-bot">
                <div data-w-id="99f3e580-62a6-f9aa-1929-adfd64a64e40" className="page-heading-wrapper">
                    <h1>About</h1>
                </div>
            </div>
        </section>
        <section>
            <div data-w-id="bbe93801-8a5a-fadc-1f02-689c751b87fd" className="container">
                <div className="_1-2-grid">
                    <div id="w-node-d35a0a3e-b2a6-9072-dfd8-24e1e14cc7a3-f7990c4d" className="block-80-width mid-align">
                        <div className="sticky-block">
                            <div className="block-gap _16">
                                <img src="https://uploads-ssl.webflow.com/648e7068052fafd80aea9fea/648ef27ea96e5e16f4acfc8c_About%20Image%201.png" loading="lazy" width="70" alt=""/>
                                <div className="align-mid-text">
                                    <div className="standard-text black-50">Me pretending to be cool to take this picture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_0de4a491-c4d0-d591-42dc-a8524fd63e93-f7990c4d" className="block-gap _80">
                        <div className="large-text">I am 20 years old, I like mathematics and I have a strange taste for logical problems. I started learning programming in 2021 in order to create a startup. In the end I postponed that goal and focused on becoming a better programmer every day. I found that I really like the problems I get to solve by writing code.
                            <br></br>Psdt: I want to join google someday.</div>
                        <div className="block-gap _16">
                            <div className="standard-text black-50">How can I help</div>
                            <div className="list-wrapper">
                                <div className="list-item-wrapper">
                                    <div className="list-text-wrapper">
                                        <div className="block-gap _40">
                                            <div className="block-gap _8">
                                                <div className="large-text">Strategy Consulting</div>
                                                <div className="standard-text black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                            </div>
                                            <div className="standard-text black-50">01</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="block-gap _40">
                                        <div className="block-gap _8">
                                            <div className="large-text">Concept &amp;Design</div>
                                            <div className="standard-text black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                        </div>
                                        <div className="standard-text black-50">02</div>
                                    </div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="block-gap _40">
                                        <div className="block-gap _8">
                                            <div className="large-text">Development</div>
                                            <div className="standard-text black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                        </div>
                                        <div className="standard-text black-50">03</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="large-text">Right now I would like to find a team to help me grow as a programmer and solve more complex problems.</div>
                        <div className="block-gap _16">
                            <div className="standard-text black-50">Experience</div>
                            <div className="list-wrapper">
                                <div className="list-item-wrapper">
                                    <div className="list-text-wrapper">
                                        <div className="medium-text">Design Lead</div>
                                        <div className="standard-text black-50">2020 - Now</div>
                                    </div>
                                    <div className="text-with-background">T.E.D Creative</div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-text-wrapper">
                                        <div className="medium-text">Senior Designer</div>
                                        <div className="standard-text black-50">2018 - 2020</div>
                                    </div>
                                    <div className="text-with-background">Bravebits</div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-text-wrapper">
                                        <div className="medium-text">Product Designer</div>
                                        <div className="standard-text black-50">2014 - 2018</div>
                                    </div>
                                    <div className="text-with-background">AIC Agency</div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-text-wrapper">
                                        <div className="medium-text">Intern</div>
                                        <div className="standard-text black-50">2012 - 2014</div>
                                    </div>
                                    <div className="text-with-background">Lunatic</div>
                                </div>
                            </div>
                        </div>
                        <div className="block-gap _16">
                            <div className="standard-text black-50">Awards & Recognitions</div>
                            <div className="list-wrapper">
                                <div className="list-item-wrapper">
                                    <div className="medium-text">Designer of the year</div>
                                    <div className="text-with-background">2023</div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="medium-text">Awwwards Judge Member 2020</div>
                                    <div className="text-with-background">2020</div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="medium-text">Awwwards SOTD - Personal Portfolio</div>
                                    <div className="text-with-background">2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer setPage={setPage}/>
    </>
  )
}

export default AboutPage