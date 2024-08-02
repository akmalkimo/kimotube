import React, {useRef, useState} from "react"

function Searchbar(props){

    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState(10);
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    async function handleSearchQuery(){
        if(inputValue === ""){
            alert("You have to type something!");
        }
        else if(results <= 0){
            alert("Number of videos can't be negative or zero!");
        }
        else if(results > 50){
            alert("Too many videos!");
        }
        else if(isNaN(results)){
            alert("That's not a number!");
        }
        else{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8ygGdqnMWaIX9VIUUZAEMXpI-r7ZOjlU&type=video&part=snippet&maxResults=${results}&q=${inputValue}`);
            const query = await response.json();

            let i = 0;
            const tempIdArr = [];
            while(i < results){
                tempIdArr.push(query.items[i].id.videoId);
                i++;
            }
            props.function1(tempIdArr);
        }
    }

    function handleInputChange(){
        setInputValue(i => i = inputRef.current.value);
    }

    function handleResultsChange(){
        setTimeout(() => {setResults(r => r = resultsRef.current.value)}, 100)
    }

    return (
        <>
        <div className="searchBar">
            <div className="row">
                <input className="search" type="text" ref={inputRef} onChange={handleInputChange} placeholder="Search KimoTube" autoComplete="true" autoFocus />
                <input className="number" type="number" defaultValue={10} ref={resultsRef} onChange={handleResultsChange} />
                <button onClick={handleSearchQuery} className="searchButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>             
            </div>
        </div>
        </>
    )
}

export default Searchbar