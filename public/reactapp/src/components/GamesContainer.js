import React from "react";
import GamesList from "./GamesList";
import GamesEditor from "./GamesEditor"
import GamesCreate from "./GamesCreate"
import GamesDelete from "./GamesDelete"


class GamesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            selectedview: 1,
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data })
            })
            .catch(console.log)
    }

    setStateAndUpdate(state) {
        this.setState(state, function () {
            fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data })
            })
            .catch(console.log)
        });
    }

    render() {
        if (this.state.selectedview == 1) {
            return (
                <>
                    <div> 
                        <GamesList games={this.state.games} setStateAndUpdate={state => this.setStateAndUpdate(state)} />
                    </div>
                </>
            )
        } else if (this.state.selectedview == 2) {
            return (
                <>
                    <div>
                        <GamesEditor gameId={this.state.selectedGame} setStateAndUpdate={state => this.setStateAndUpdate(state)} />
                    </div>
                </>
            )
        } else if (this.state.selectedview == 3) {
            return (
                <>
                    <div>
                        <GamesCreate setStateAndUpdate={state => this.setStateAndUpdate(state)} />
                    </div>
                </>
            )
        } else if (this.state.selectedview == 4) {
            return (
                <>
                    <div>
                        <GamesDelete gameId={this.state.selectedGame} setStateAndUpdate={state => this.setStateAndUpdate(state)} />
                    </div>
                </>
            )
        }


        return (
            <>
                <div>
                    No valid component selected
                </div>
            </>
        )
    }
}
export default GamesContainer