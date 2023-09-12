import React from 'react'
import './IbcscComp.css'

function IbcscComp() {
    return (
        <div className='section-6 IBDP-Comp-align'>
            <div className="container-2">
                <div className="content-2">
                    <div className="subject-table">
                        <div className="box-1">
                            <h1><span className="IBDP-text color-Text-Subject">Sciences</span></h1>
                            <button id="physics"> IGCSE Physics </button>
                            <button id="chemistry"> IGCSE Chemistry </button>
                            <button id="biology"> IGCSE Biology </button>
                            <button id="comp"> IGCSE Computer Science </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-one">Social Sciences</span> </h1>
                            <button id="economics"> IGCSE Economics </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-two">Foreign Languages</span> </h1>
                            <button id="englit"> IGCSE English Literature </button>
                            <button id="englan"> IGCSE English Language </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-three">Other</span> </h1>
                            <button id="gp"> IGCSE Global Perspectives </button>
                            <button id="addmath"> IGCSE Additional Mathematics </button>
                            <button id="intmath"> IGCSE International Mathematics </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IbcscComp;