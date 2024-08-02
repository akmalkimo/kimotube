import React, { useRef } from "react"
import BackToTopBttn from './BackToTopBttn'

function Content(props){

    const wrapperRef = useRef(null);

    return (
    <>
    <div className="wrapper" ref={wrapperRef}>
    <BackToTopBttn />
        {
            props.var1.map(element => <iframe src={`http://www.youtube.com/embed/${element}`} allowFullScreen key={element}></iframe>)
        }
    </div>
    </>
    )
}

export default Content