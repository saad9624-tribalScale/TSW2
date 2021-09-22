import React from "react"
import TribalScale from "./../assets/tribalScale.png"
import Close from "./../assets/Closed.png"
function TBHeader() {
  return (
    <div className="flex items-center justify-between">
      <img
        style={{
          width: 120,
          height: 10,
          resize: "contain",
        }}
        src={TribalScale}
        alt={"1.45rem"}
        className="items-center mt-5 hover:cursor-pointer "
      />
      <div>
        {/* <span class="flex h-3 w-96">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-100"></span>
        </span> */}

        <h2
          style={{ fontSize: 10 }}
          className="text-xs font-custom1 font-black mb-0 px-3 hover:cursor-pointer hidden sm:inline-flex "
        >
          CONTACT US
        </h2>

        <div className="bg-white h-1 -mt-2 w-51 sm:bg-yellow-200 "></div>

        <img
          style={{
            width: 40,
            height: 15,
            resize: "contain",
          }}
          src={Close}
          alt={"1.45rem"}
          className="sm:hidden mt-5 hover:cursor-pointer "
        />
      </div>
    </div>
  )
}

export default TBHeader
