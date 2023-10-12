import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '', adviceId: 177 };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const data = response.data.slip;
            document.querySelector("p").innerText = "Q U O T E # " + data.id;
            this.setState({ advice: data.advice, adviceId: data.id });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { advice, adviceId } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <p>Q U O T E # {adviceId}</p>
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
