import React from 'react'
import { NavControl } from '../../../style'
import Button from "../../../../clicks/Button";
import Ripple from "../../../../clicks/Ripple";

export const Control = () => {
    
  return (
    <Button>
        Ripple Effect
        <Ripple color={"#1fecf9"} duration={1500} />
    </Button>
  )
}

export default Control