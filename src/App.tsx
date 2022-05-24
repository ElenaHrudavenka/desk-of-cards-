import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import createRoutes from "./common/routes/routes";

const routes = createRoutes();

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                {routes}
                {/* <Footer/>*/}
            </div>
        </div>

    );
}

export default App;
