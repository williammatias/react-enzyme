import React from "react";
// import logo from '../../logo.svg';
// import './App.css';
import Search from "../../component/Search/index";
import fetchArticles from "../../api";

class App extends React.Component{

    state = {
        articles: []
    };

    performSearch = event => {
        return fetchArticles(event).then(data =>
            this.setState({articles: data.response.results})
        );
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                </header>
                <Search
                    performSearch={this.performSearch}
                    articles={this.state.articles}
                />
            </div>

        );
    }
}

export default App;
