export default function Square(props){

  return (
    <div className={`h-20 w-20 p-1 flex items-center justify-center bg-${props.color}`}>
      <div class={`${props.hasPeca ? `${props.switchColor ? 'bg-red-500' : 'bg-white'} rounded-full h-16 w-16` : ''}`}></div>

    </div>
  )
}

