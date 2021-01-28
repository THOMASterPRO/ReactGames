import React from "react";


class GamesEditor extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        game : {},
        favoriteChecked: true,
        value: "",
        putResponse: {}
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games/' + this.props.gameId)
            .then(res => res.json())
            .then((data) => {
                this.setState({ game: data, favoriteChecked: data.favorite == "0" ? false : true })
            })
            .catch(console.log);
    }






      handleSubmit(event) {
          alert(event.target.favorite.checked);
        let gameHelper = { ...this.state.game };
        gameHelper["name"] =  event.target.name.value
        gameHelper["year"] =  event.target.year.value
        gameHelper["favorite"] = event.target.favorite.checked ? "1" : "0";
        gameHelper["quantity"] =  event.target.quantity.value
        gameHelper["platform"] =  event.target.platform.value
        gameHelper["description"] =  event.target.description.value
        this.setState({game: gameHelper}, function () {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json',
                            'Accept': 'application/json' },
                body: JSON.stringify(this.state.game)
            };

            fetch('http://127.0.0.1:8000/api/games/' + this.props.gameId, requestOptions)
                .then(response => response.json());

            console.log(JSON.stringify( this.state.game));
        });

        event.preventDefault();
      }




    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Name of the game" name="name" defaultValue={this.state.game.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input type="text" className="form-control" id="year" placeholder="Year of release" name="year" defaultValue={this.state.game.year} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" className="form-control" id="quantity" placeholder="How many you own" name="quantity" defaultValue={this.state.game.quantity} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="favorite">Favorite:</label>
                            <input type="checkbox" className="form-control" id="favorite" name="favorite" checked={this.state.favoriteChecked} onChange={()=>{this.setState({favoriteChecked: !this.state.favoriteChecked})}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="platform">Platform:</label>
                            <input type="text" className="form-control" id="platform" placeholder="Platform you have the game on" name="platform" defaultValue={this.state.game.platform} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" id="description" placeholder="A description of the game" name="description" defaultValue={this.state.game.description} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }



}
export default GamesEditor
