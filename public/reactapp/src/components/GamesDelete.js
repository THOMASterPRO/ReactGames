import React from "react";


class GamesEditor extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        game : {}
      }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: ""
        };

        fetch('http://127.0.0.1:8000/api/games/' + this.props.gameId, requestOptions)
            .then(response => response.json())
            .catch(console.log);
    }


    render() {
        return (
            <>
               Record deleted
            </>
        )
    }



}
export default GamesEditor
