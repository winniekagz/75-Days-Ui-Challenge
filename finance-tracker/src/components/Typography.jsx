

export default function Typography({
    fontSize,
    fontWeight,hoverColor,
    color,
    label,
    className

}) {
  return (
    <div>
        <p className={`hover:text-${hoverColor} ${className}`} style={{fontSize:fontSize,
            fontWeight:fontWeight,
            color:color
        }}>{label}</p>
    </div>
  )
}
