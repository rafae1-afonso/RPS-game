function LoadingBar(props) {
    return (
        <section id="loading-bar">
            <h2>You choosed {props.object}</h2>
            <div className="loading-bar__handle"><div></div></div>
        </section>
    )
}

export default LoadingBar