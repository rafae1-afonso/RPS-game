import { useState } from 'react'
import Choose from './components/Choose'
import LoadingBar from './components/LoadingBar'

export default function App() {
  const [playing, setPlayingStatus] = useState(false)

  return (
    <>
      <header><h1>Rock, Paper, Scissor</h1></header>

      {!playing && (
        <section className='play-button-handler'><a href="#choose-buttons">
          <button onClick={() => { setPlayingStatus(true) }}>PLAY</button></a>
        </section>
      )}
      {playing && (<Choose handleChoosed={} />)}
    </>
  )
}