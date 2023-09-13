import Square from "./Square";

export default function LineSquare(props){
  const isReversed = props.reversed;

  return (
    <div className={`flex ${props.reversed ? 'flex-row-reverse' : 'flex-row'}`}>
      <Square color="black" hasPeca={props.hasPeca} switchColor={props.switchColor}/>
      <Square color="white" />
      <Square color="black" hasPeca={props.hasPeca} switchColor={props.switchColor}/>
      <Square color="white"/>
      <Square color="black" hasPeca={props.hasPeca} switchColor={props.switchColor}/>
      <Square color="white" />
      <Square color="black" hasPeca={props.hasPeca} switchColor={props.switchColor}/>
      <Square color="white" />
    </div>
  )
}