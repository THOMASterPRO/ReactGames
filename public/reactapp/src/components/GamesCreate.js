import React from "react";
import GamesList from "./GamesList";

class GamesCreate extends React.Component {

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
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Name of the game" name="name"/>                            
                        </div> 
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input type="text" className="form-control" id="year" placeholder="Year of release" name="year" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" className="form-control" id="quantity" placeholder="How many you own" name="quantity" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favorite">Favorite:</label>
                            <input type="checkbox" className="form-control" id="favorite" name="favorite" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="platform">Platform:</label>
                            <input type="text" className="form-control" id="platform" placeholder="Platform you have the game on" name="platform" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" id="description" placeholder="A description of the game" name="description" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}
export default GamesCreate