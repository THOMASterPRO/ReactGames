import React from "react"

class GamesList extends React.Component {
    render() {
        return (
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {this.props.games.map(game => (
                    <div className="accordion-item" key={game.id}>
                        <h2 className="accordion-header" id={"flush-heading" + game.id}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + game.id}  aria-expanded="false" aria-controls={"flush-collapse" + game.id} >
                                {game.name}
                            </button>
                        </h2>
                        <div id={"flush-collapse" + game.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + game.id} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="card">
                                    <ul className="list-group list-group-flush ">
                                        <li className="list-group-item">
                                            <strong>id</strong> : {game.id}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Platform</strong>: {game.platform}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Year</strong>: {game.year}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Quantity</strong>: {game.quantity}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Favorite</strong>: {game.favorite}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default GamesList