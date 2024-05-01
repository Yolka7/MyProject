import './style.css'


export default function MiniInput({
  label,
  type,
  placeholder,
  onChange,
  value,
  disabled
}) {

  return (
    <div className='input-main_mini'>
      <p className="input-main__label_mini">{label}</p>
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