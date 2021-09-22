import React from "react"

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 transform transition duration-300
        ease-out"
    >
      <div className="w-72">
        <img style={{ height: 400 }} src={img} />
      </div>
      <h3 className="text-2xl -mt-24 absolute px-4 text-white font-custom leading-none opacity-100">
        {title}
      </h3>
    </div>
  )
}

export default MediumCard
