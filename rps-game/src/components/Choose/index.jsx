function Choose(props) {
    return (
        <section id="choose-buttons">
            <h2>Choose one:</h2>
            <div className="choose-buttons__buttons">
                <button onClick={() => props.handleChoosed('rock')} title="Rock" className="buttons__rock">&#128507;</button>
                <button onClick={() => props.handleChoosed('paper')} title="Paper" className="buttons__paper">&#128196;</button>
                <button onClick={() => props.handleChoosed('scissor')} title="Scissor" className="buttons__scissor">&#9986;</button>
            </div>
        </section>
    )
}

export default Choose