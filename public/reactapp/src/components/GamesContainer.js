import React from "react";
import GamesList from "./GamesList";
import GamesEditor from "./GamesEditor"
import GamesCreate from "./GamesCreate"
import GamesDelete from "./GamesDelete"


class GamesContainer extends React.Component {

    state = {
        editGameId: '',
        games: [
            {
                "id": 1,
                "name": "Super  odyssey koen",
                "year": "2017",
                "quantity": "1",
                "favorite": "1",
                "platform": "Nintendo Switch",
                "description": "A very fun mario game",
                "created_at": "2021-01-26T14:35:28.000000Z",
                "updated_at": "2021-01-28T18:10:10.000000Z"
            },
            {
                "id": 2,
                "name": "Super mario odyssey",
                "year": "2017",
                "quantity": "1",
                "favorite": "true",
                "platform": "Nintendo Switch",
                "description": "A very fun mario game",
                "created_at": "2021-01-26T14:35:28.000000Z",
                "updated_at": "2021-01-28T18:10:10.000000Z",
            },
            {
                "id": 3,
                "name": "Super mario odyssey",
                "year": "2017",
                "quantity": "1",
                "favorite": "true",
                "platform": "Nintendo Switch",
                "description": "A very fun mario game",
                "created_at": "2021-01-26T15:36:10.000000Z",
                "updated_at": "2021-01-26T15:36:10.000000Z"
            },
        ]
    }


    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                // this.setState({ games: data  })
            })
            .catch(console.log)
    }

    SwitchRender() {
        alert('hello');
    }

    editGame = (gameId) => {
        console.log('edit gAme!', gameId)
        this.setState({ editGameId: gameId })
    }

    closeEdit = () => {
        this.setState({ editGameId: '' })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a className="navbar-brand" href="">
                            Game Database
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <!-- Left Side Of Navbar --> */}
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/games">Gameslist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/games/create">Add game</a>
                                </li>
                            </ul>

                            {/* <!-- Right Side Of Navbar --> */}
                            <ul className="navbar-nav ml-auto">
                                {/* <!-- Authentication Links --> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    this.state.editGameId: {this.state.editGameId}<br></br>

                    
                    {/*
                    <GamesList games={this.state.games} />
                    <GamesEditor gameId="5" />
                    <GamesCreate/>
                    <GamesDelete gameId="5" />

                    */}
                    
                    {/* <GamesEditor gameId={this.state.editGameId} /> */}

                    {this.state.editGameId &&
                        <GamesEditor gameId={this.state.editGameId} close={this.closeEdit} />
                    }

                    {!this.state.editGameId && 
                        <GamesList games={this.state.games} editGame={this.editGame} />
                    }
                </div>
            </>
        )
    }
}
export default GamesContainer