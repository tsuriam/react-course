
export default function Link(props: { href: string, text: string}) {
  
  return (
    <a href={props.href}>{props.text}</a>
  )
}
