import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'

function App(){

  const [idArr, setIdArr] = useState([]);

  function setIdArrFunc(array){
    setIdArr(i => i = array);
  }

  return (
    <>
    <Header function1={setIdArrFunc} />
    <Content var1={idArr} />
    </>
  )
}


export default App