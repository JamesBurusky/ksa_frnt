export default function Box(props){

    return <div className="box">
         <img src={props.img}></img>
                <p>{props.title}</p>
            </div>
}