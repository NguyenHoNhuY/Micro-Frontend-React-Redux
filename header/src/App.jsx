import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import "./index.scss";

const App = () => (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <div>Name: header</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
    </div>
);
const rootNode = document.getElementById("app");
ReactDOM.render(<App />, rootNode);
