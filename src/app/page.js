import LineSquare from './components/LineSquare'

export default function Home() {
  return (
    <main className='flex flex-col bg-gray-800 w-screen h-screen items-center justify-center'>
      <LineSquare hasPeca={true}/>
      <LineSquare reversed={true} hasPeca={true}/>
      <LineSquare hasPeca={true}/>
      <LineSquare reversed={true}/>
      <LineSquare />
      <LineSquare reversed={true} hasPeca={true} switchColor={true}/>
      <LineSquare hasPeca={true} switchColor={true}/>
      <LineSquare reversed={true} hasPeca={true} switchColor={true}/>
    </main>
  )
}
