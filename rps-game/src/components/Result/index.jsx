function Result(props) {
    const objects = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * objects.length + 1)
    const machineChoice = objects[randomNumber-1]

    let result = ''

    const results = {
        'rock paper': false,
        'rock scissor': true,
        'paper rock': true,
        'paper scissor': false,
        'scissor rock': false,
        'scissor paper': true
    }

    const verify = results[`${props.userChoice} ${machineChoice}`]
    if (verify) {
        result = 'You win!'
    } else if (props.userChoice == machineChoice) {
        result = 'Draw!'
    } else {
        result = 'You lost!'
    }

    return (
        <section id="result">
            <h2>The machine choosed {machineChoice}</h2>
            <h2 className="result__text"><span className={verify ? 'win' : 'lost'}>{result}</span></h2>
        </section>
    )
}

export default Result