import { useState } from "react";

const Checkbox = ({data}) => {
  const {title, value, checked} = data;
  const [isCheck, setIsCheck] = useState(checked);

  const handleChange = () => {
    setIsCheck(!isCheck);
  }
  return (
    <li>
      <label className="check-container">
        <input type="checkbox" checked={isCheck} onChange={handleChange}/>
        <span className="checkmark"></span>
        {
          value ? <small><span>{title}</span><span>{value}</span></small> : <small>{title}</small>
        }
      </label>
    </li>
  )
}

export default Checkbox;