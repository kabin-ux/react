import React, { useContext } from 'react'
import { BioData } from './Comp1'

const Comp3 = () => {
  const textMsg = useContext(BioData);

  return (
    <div>
        <h1>{textMsg}</h1>
    </div>
  )
}

export default Comp3;

