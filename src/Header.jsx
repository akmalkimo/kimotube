import Searchbar from './Searchbar.jsx'

function Header(props){

    return (
        <>
        <Searchbar function1={props.function1} function2={props.function2} />
        </>
    )
}

export default Header