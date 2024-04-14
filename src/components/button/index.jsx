import './style.css'

export default function Button({
  children,
  disabled = false,
  isLoad = false,
  onClick,
  type = 'button',
}) {
  return (
    <button
      className="btn-main"
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {isLoad ? 'Загрузка' : children} 
    </button>
  )
}
