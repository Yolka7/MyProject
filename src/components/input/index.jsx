import './style.css'


export default function Input({
  label,
  type,
  placeholder,
  onChange,
  value,
  disabled
}) {

  return (
    <div className='input-main'>
      <p className="input-main__label">{label}</p>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={( val ) => onChange(val.target.value)}
      />
    </div>
  )
}
