import React from 'react'
import "./Footer.css"
import { footerframe, start } from "../../images"

const Footer = () => {
  return (
    <section className="Footer">
        <img src={footerframe} className="media" alt="social media"></img>
        <img src={start} className="copyright" alt="copyright"></img>
    </section>
  )
}

export default Footer