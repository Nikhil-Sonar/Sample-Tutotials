import React from 'react'
import './IbdpComp.css'

function IbdpComp() {
    return (
        <div className='section-6 IBDP-Comp-align'>
            <div className="container-2">
                <div className="content-2">
                    <div className="subject-table">
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject">Sciences</span></h1>
                            <button id="physics"> IB Physics </button>
                            <button id="chemistry"> IB Chemistry </button>
                            <button id="biology"> IB Biology </button>
                            <button id="ess">IB Environmental Systems and Societies </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-one">Social Sciences</span> </h1>
                            <button id="economics"> IB Economics </button>
                            <button id="business"> IB Business Management </button>
                            <button id="psychology"> IB Psychology </button>
                            <button id="history"> IB History </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-two">Foreign Languages</span> </h1>
                            <button id="spanish-ab"> IB Spanish AB </button>
                            <button id="spanish-b"> IB Spanish B </button>
                            <button id="french-ab"> IB French AB </button>
                            <button id="french-b"> IB French B </button>
                            <button id="german-ab"> IB German AB </button>
                            <button id="mandarin-ab"> IB Mandarin AB </button>
                            <button id="hindi"> IB Hindi SL </button>
                        </div>
                        <div className="box-1">
                            <h1> <span className="IBDP-text color-Text-Subject-three">Other</span> </h1>
                            <button id="math-aa-hl"> IB Math Analysis and Approaches </button>
                            <button id="tok"> Theory of Knowledge </button>
                            <button id="eng-langlit-sl"> IB English Language and Literature </button>
                            <button id="english-lit"> IB English Literature </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IbdpComp;