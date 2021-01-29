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
        selectedGame: 0
    }
}


    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games')
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data  })
            })
            .catch(console.log)
    }

    
    setStateAndUpdate(state) {
        
        this.setState(state, function () {
            alert ('erin')
            this.child.setState({temp : new Date});
        });
    }

    render() {
        if(this.state.selectedview == 1)
        {
            return (
                <>
                    <div>
                        <GamesList games={this.state.games} setState={state => this.setState(state)} setStateAndUpdate={state => this.setStateAndUpdate(state)} ref={ref => (this.child = ref)}/>                
                    </div>
                </>
            )  
        } else if (this.state.selectedview == 2) {
            return (
                <>
                    <div>
                        <GamesEditor gameId={this.state.selectedGame} setState={state => this.setState(state)} setStateAndUpdate={state => this.setStateAndUpdate(state)} ref={ref => (this.child = ref)}/>
                    </div>
                </>
            )
        } else if (this.state.selectedview == 3) {
            return (
                <>
                    <div>
                        <GamesCreate setState={state => this.setState(state)} setStateAndUpdate={state => this.setStateAndUpdate(state)} ref={ref => (this.child = ref)}/>
                    </div>
                </>
            )
        } else if (this.state.selectedview == 4) {
            return (
                <>
                    <div>
                        <GamesDelete gameId={this.state.selectedGame} setState={state => this.setState(state)} setStateAndUpdate={state => this.setStateAndUpdate(state)} ref={ref => (this.child = ref)}/>
                    </div>
                </>
            )    
        }
        
        
        return (
            <>

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