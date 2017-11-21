import React, { Component } from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { Book } from './pages/Book/Book';
import { gallery, slideshow } from './content/content';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: () => (<Book gallery={gallery}/>),
            home: () => (<Home slideshow={slideshow}/>)
        };
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={this.state.home}/>
                        <Route path={process.env.PUBLIC_URL + '/book'} component={this.state.book}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

