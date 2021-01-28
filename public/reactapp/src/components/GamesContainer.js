import React from "react";
import GamesList from "./GamesList";
import GamesEditor from "./GamesEditor"
import GamesCreate from "./GamesCreate"

class GamesContainer extends React.Component {

    state = {
        games: []
      }


    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <>
                <div>
                    {/*
                    <GamesList games={this.state.games} />
                    */}
                    <GamesEditor gameId="5" />
                </div>
            </>
        )
    }
}
export default GamesContainer