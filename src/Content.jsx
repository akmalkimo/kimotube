import React, { useRef } from "react"

function Content(props){

    const wrapperRef = useRef(null);

    return (
    <>
    <div className="wrapper" ref={wrapperRef}>
    <button className='backToTop'><a href="#">To top</a></button>
        {
            props.var1.map(element => <iframe src={`http://www.youtube.com/embed/${element}`} allowFullScreen key={element}></iframe>)
        }
    </div>
    </>
    )
}

export default Content