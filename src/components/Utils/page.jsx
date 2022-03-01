
export default function Page(props) {
  return (
    <>
      {props.offset + 1 === props.number && (
        <p
          onClick={() => props.handlePages(props.number)}
          className="page-active"
        >
          {props.number}
        </p>
      )}
      {props.offset + 1 !== props.number && (
        <p onClick={() => props.handlePages(props.number)} className="page">
          {props.number}
        </p>
      )}
    </>
  );
}
