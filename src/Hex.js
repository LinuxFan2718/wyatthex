import { useState } from "react";

const Hex = () => {
  const [color, setColor] = useState('green');
  const hexStyle = {
    background: color
  }

  const handleClick = () => {
    setColor('purple');
  }
  return (
    <div  onClick={handleClick}></div>
  )
}

export default Hex;