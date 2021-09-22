import React from "react"
import SelectedProject from "../assets/selectedProj.png"
import MediumCard from "./MediumCard"

function SelectedProjects() {
  const data = [
    {
      img: "https://links.papareact.com/2io",
      title: "Building a global digital port services platform",
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ]

  return (
    <div className="lessSpacing">
      <img
        alt={"1.25rem"}
        style={{ marginLeft: -20 }}
        src={SelectedProject}
      ></img>
      <h5
        style={{
          color: "#757575",
          letterSpacing: 5,
          fontSize: 10,
          marginTop: -58,
          fontWeight: "bold",
        }}
        className="font-custom1 text-xs absolute"
      >
        SELECTED PROJECTS
      </h5>
      <h1 style={{ marginTop: -30 }} className="blackTextHeading">
        Helping enterprises and entrepreneurs achieve more for their customers.
      </h1>

      <div className="mt-12 flex space-x-9 overflow-scroll p-3 -m-3">
        {data?.map(({ img, title }) => (
          <MediumCard key={img} img={img} title={title} />
        ))}
      </div>
    </div>
  )
}

export default SelectedProjects
