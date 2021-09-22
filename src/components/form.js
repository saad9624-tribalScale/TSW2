import React from 'react';

export default () => {
    return (
        <div>
            <div className="spacing">
                <h1 className="blackTextHeading">
                    Let’s work <br /> together.
                </h1>

                <h2
                    style={{ color: "#80774F" }}
                    className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4"
                >
                    Fill in the form and a TribalScale <br/> representative will be in touch soon!
                </h2>

                <h2
                    style={{ color: "#000" }}
                    className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4 font-extrabold"
                >
                    Let's chat about...
                </h2>

                <select className="forminput">
                    <option>New Business</option>
                    <option>Old Business</option>
                </select>

                <h2
                    style={{ color: "#000", fontWeight:'bold' }}
                    className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4 mb-5"
                >
                    Full Name *
                </h2>

                <input className="forminput" placeholder=""/>

                <h2
                    style={{ color: "#000", fontWeight:'bold' }}
                    className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4 mb-5"
                >
                    Email *
                </h2>

                <input className="forminput" placeholder=""/>

                <h2
                    style={{ color: "#000", fontWeight:'bold' }}
                    className="leading-snug text-xs sm:text-sm md:text-md lg:text-md  font-custom1 md:w-3/4 lg:w-3/4 xl:w-2/4 mb-5"
                >
                    Message
                </h2>

                <textarea rows="4" cols="50" className="forminput" placeholder=""/>

                <button className="submitButton">SUBMIT</button>
            </div>
        </div>
    )
}