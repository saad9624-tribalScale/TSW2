import React from "react"
import TribalScale from "./../assets/tribalScale.png"
import facebook from "../assets/facebook.png"
import drible from "../assets/social2.png"
import insta from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
function footer() {
  return (
    <div>
      <div className="flex space-x-10">
        <img className="hover:cursor-pointer" src={facebook} />
        <img className="hover:cursor-pointer" src={drible} />
        <img className="hover:cursor-pointer" src={insta} />
        <img className="hover:cursor-pointer" src={twitter} />
        <img className="hover:cursor-pointer" src={linkedin} />
      </div>

      <img src={TribalScale} className="hover:cursor-pointer py-10" />

      <h1
        style={{ letterSpacing: 5 }}
        className="text-center font-custom1 text-sm"
      >
        COPY RIGHT 2021
      </h1>
      <h1
        style={{ letterSpacing: 5 }}
        className="text-center font-custom1 text-sm -mt-6"
      >
        TRIBALSCALE DMCC
      </h1>
    </div>
  )
}

export default footer
