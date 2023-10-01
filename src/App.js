import './App.css';
import About from './Components/About/About';
import Introduction from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Layout from './Components/Header/Header';

function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <header className="App-header">
                    <section id="homepage">
                        <Introduction />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>
                    
                    <section id="contact">
                        <ContactMe />
                    </section>

                    


                    
                </header>
            </Layout>
        </div>
    );
}

export default App;
