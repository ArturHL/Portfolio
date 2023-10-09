import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function ContactPage({setPage}) {
  return (
    <>
        <Navbar setPage={setPage}/>
        <section>
            <div className="container divider-bot">
                <div data-w-id="8739dfe4-c145-93dd-a0ef-032b12aa8eda" className="page-heading-wrapper">
                    <h1>Contact</h1>
                </div>
            </div>
        </section>
        <section>
            <div data-w-id="2e0c0f33-ec70-87fa-5ff3-94ee6a8cf349" className="container">
                <div className="_1-2-grid">
                    <div id="w-node-_1f20fc62-91a6-7b60-0564-7479b67cef29-67b891c2" className="block-gap _40">
                        <div className="block-gap _16">
                            <div className="standard-text black-50">Current Location</div>
                            <div className="medium-text">London - UK</div>
                        </div>
                        <div className="block-gap _16">
                            <div className="standard-text black-50">Contact Info</div>
                            <div className="medium-text">
                                Hello@simon.com<br/>+11 34 33 44 97
                            </div>
                        </div>
                        <div className="block-gap _16">
                            <div className="standard-text black-50">Social</div>
                            <div className="block-gap _16">
                                <a href="http://webflow.com" target="_blank" className="social-link">Instagram</a>
                                <a href="http://webflow.com" target="_blank" className="social-link">Twitter</a>
                                <a href="http://webflow.com" target="_blank" className="social-link">Linkedln</a>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_55191984-f946-fb70-e577-f92272cbe11f-67b891c2" className="block-gap _40">
                        <div className="large-text">Don &#x27;t be shy. Let &#x27;s have a chat !</div>
                        <div className="form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="648f16e59c604c5967b891c2" data-wf-element-id="e182d0b5-7f43-b29a-3dbf-6d32fbcd9147">
                                <div className="field-block">
                                    <label for="name" className="field-label">Name</label>
                                    <input type="text" className="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Your Name" id="name"/>
                                </div>
                                <div className="field-block">
                                    <label for="Email" className="field-label">Email</label>
                                    <input type="email" className="text-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Your Email" id="Email"/>
                                </div>
                                <div className="field-block">
                                    <label for="field" className="field-label">Message</label>
                                    <textarea placeholder="Your Message" maxlength="5000" id="field" name="field" data-name="Field" className="text-field text-area w-input"></textarea>
                                </div>
                                <input type="submit" value="Submit Your Message" data-wait="Please wait..." className="button w-button"/>
                            </form>
                            <div className="w-form-done">
                                <div className="standard-text">Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div className="error-message-text">Oops! Something went wrong while submitting the form.</div>
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

export default ContactPage