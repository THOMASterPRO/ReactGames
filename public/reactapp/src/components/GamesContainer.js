import React from "react";
import GamesList from "./GamesList";
import GamesEditor from "./GamesEditor"
import GamesCreate from "./GamesCreate"
import GamesDelete from "./GamesDelete"


class GamesContainer extends React.Component {

    state = {
        games: []
    }


    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data  })
            })
            .catch(console.log)
    }

    SwitchRender() {
        alert('hello');
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
                    {/*
                    <GamesList games={this.state.games} />
                    <GamesEditor gameId="5" />
                    <GamesCreate/>
                    <GamesDelete gameId="5" />

                    */}
                    <GamesList games={this.state.games} />                
                </div>
            </>
        )
    }
}
export default GamesContainer