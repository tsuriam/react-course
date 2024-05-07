export default function Row(props: {text?: string}) {
  const text = props.text ?? "hii"

  return (
    <div style={{display: "flex", flexDirection: "row"}}>{text}</div>
  )
}
