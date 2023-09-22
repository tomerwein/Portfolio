import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Introduction from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';

function App() {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <div id="homepage">
                    <Introduction />
                </div>

                <div id="about">
                    <About />
                </div>

                <div id="projects">
                    <Projects />
                </div>
                

            </header>
        </div>
    );
}

export default App;
