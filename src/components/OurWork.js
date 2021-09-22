import React from "react"

function OurWork() {
  return (
    <div className="bg-black mt-20">
      <div className="spacing">
        <h5
          style={{ color: "#757575", letterSpacing: 5, fontSize: 10 }}
          className="font-custom1 text-xs"
        >
          WHAT WE DO
        </h5>
        <h1 className="whiteTextHeading">
          We design, build & innovate with enterprises throughout their digital
          journey.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="scaleOut">
            <h1 className="whiteText">Strategy</h1>
            <p className="whiteSubText">
              People. Process. Technology. We assess against leading practices,
              then co-design how to get you there.
            </p>
          </div>

          <div className=" md:ml-10 lg:ml-15 scaleOut">
            <h1 className="whiteText">Product</h1>
            <p className="whiteSubText">
              We build cloud-native software solutions for web, mobile and
              emerging technologies.
            </p>
          </div>

          <div className="scaleOut">
            <h1 className="whiteText">Design</h1>
            <p className="whiteSubText">
              Our designers solve problems by creating and designing products
              people will use and love.
            </p>
          </div>

          <div className=" md:ml-10 lg:ml-15 scaleOut">
            <h1 className="whiteText">Engineering</h1>
            <p className="whiteSubText">
              Our engineers build software with the most modern tools and are
              fluent across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurWork
