import React from "react"
import TBHeader from "../components/TBHeader"
import MainImage from "../assets/main.png"
import OurWork from "../components/OurWork"
import SelectedProjects from "../components/SelectedProjects"
import OurCustomer from "../components/OurCustomer"
import Toronto from "../assets/Toronto.png"
import Dubai from "../assets/dubai.png"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="">
    <div className="my-5 mx-8 lg:mx-24">
      <TBHeader />
      <h1 className="text-md md:text-5xl lg:text-6xl xl:text-7xl mt-10 leading-none text-black font-custom transform transition-all duration-300 ease-out scale-100">
        TribalScale helps <br /> enterprises adapt & <br /> thrive in the
        digital era.
      </h1>
      <h4
        style={{ color: "#80774F" }}
        className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4"
      >
        We have years of experience in digital strategy, design, and
        multi-platform engineering. Through agile practices, we build digital
        products and transform businesses.
      </h4>
    </div>
    <img alt="" src={MainImage} />
    <OurWork />
    <SelectedProjects />
    <OurCustomer />

    <div className="spacing">
      <h4 className="blackTextHeading">
        With global delivery capabilities, we build where you are.
      </h4>
    </div>

    <div
      //style={{ height: 300 }}
      className="grid grid-cols-2 sm:grid-cols-2"
    >
      <img style={{ width: "100%" }} className="imageHeight" src={Toronto} />
      <img style={{ width: "100%" }} className="imageHeight" src={Dubai} />
    </div>

    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Footer />
    </div>
  </div>

  // <Layout>
  //   <Seo title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["auto", "webp", "avif"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>
)

export default IndexPage
