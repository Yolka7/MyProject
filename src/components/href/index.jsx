import './style.css'

export default function Link({
  children,
  disabled = false,
  isLoad = false,
  onClick,
  type = 'a',
}) {
  return (
    <link
      className="btn-forget"
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {isLoad ? 'Загрузка' : children} 
    </link>
  )
}
