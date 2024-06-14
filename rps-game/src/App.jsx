import { useState, useRef } from 'react'
import Choose from './components/Choose'
import LoadingBar from './components/LoadingBar'
import Result from './components/Result'
import PlayAgain from './components/PlayAgain'

export default function App() {
  const [playing, setPlayingStatus] = useState(false)
  const [choosed, setChoosedStatus] = useState(false)
  const [objectChoosed, setChoosedObject] = useState(null)
  const [resultShowed, showResult] = useState(false)
  const [playagainButtonShowed, showPlayAgainButton] = useState(false)

  function handleChoosed(choosedObj) {
    if (choosed) {return null}
    setChoosedObject(choosedObj)
    setChoosedStatus(true)
  }

  function _showResult() {
    setTimeout(() => {
      showResult(true)
      showPlayAgainButton(true)
    }, 3000);
  }

  return (
    <>
      <header><h1>Rock, Paper, Scissor</h1></header>

      {!playing && (
        <section className='play-button-handler'>
          <button onClick={() => { setPlayingStatus(true) }}>PLAY</button>
        </section>
      )}

      {playing && ! choosed && (<Choose handleChoosed={handleChoosed}/>)}
      {choosed && <LoadingBar object={objectChoosed}/>}
      {choosed && _showResult()}
      {resultShowed && <Result userChoice={objectChoosed}/>}
      {playagainButtonShowed && <PlayAgain/>}
    </>
  )
}