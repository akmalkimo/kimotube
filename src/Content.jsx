import React, { useRef } from "react"

function Content(props){

    const wrapperRef = useRef(null);

    return (
    <>
    <div className="wrapper" ref={wrapperRef}>
        {
            props.var1.map(element => <iframe src={`https://www.youtube.com/embed/${element}`} allowFullScreen key={element}></iframe>)
        }
    </div>
    </>
    )
}

export default Content
