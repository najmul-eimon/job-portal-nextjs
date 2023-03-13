const InputBox = ({label, placeholder, id, inputType}) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>{label} <span className="require">*</span></label>
      <input type={inputType} id={id} className="inputs" placeholder={placeholder ? placeholder : ''} required/>
    </div>
  )
}

export default InputBox