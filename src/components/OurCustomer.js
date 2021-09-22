import React from "react"
import Logo1 from "../assets/du.png"
import Logo2 from "../assets/meem.png"
import Logo3 from "../assets/emirates.png"
import Logo4 from "../assets/dp-world.png"
import Logo5 from "../assets/al-futtaim.png"
import Logo6 from "../assets/thrive.png"
import Logo7 from "../assets/gib.png"
function OurCustomer() {
  return (
    <div className=" bg-black">
      <div className="lessSpacing">
        <h5
          style={{ letterSpacing: 5 }}
          className="font-custom1 text-sm text-white text-center mt-10"
        >
          OUR CUSTOMERS
        </h5>

        <h1 className="whiteTextHeading text-center">
          Trusted by incredible companies with bold ambitions.
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4  py-10">
          <img className="customerImage" alt={"1.45rem"} src={Logo1} />
          <img className="customerImage" alt={"1.45rem"} src={Logo2} />
          <img className="customerImage" alt={"1.45rem"} src={Logo3} />
          <img className="customerImage" alt={"1.45rem"} src={Logo4} />
          <img className="customerImage" alt={"1.45rem"} src={Logo5} />
          <img className="customerImage" alt={"1.45rem"} src={Logo6} />
          <img className="customerImage" alt={"1.45rem"} src={Logo7} />
          <img className="customerImage" alt={"1.45rem"} src={Logo5} />
        </div>
      </div>
    </div>
  )
}

export default OurCustomer
