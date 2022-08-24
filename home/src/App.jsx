import Header from "header/components/Header";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import StoreProvider from "redux/features/store";
import "./index.scss";
import { increment } from "redux/features/counterSlice";

const App = () => {
    const [count, setCount] = useState(0);
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="App border-red-700 w-full h-screen p-2 border-dashed border-4 ">
            <div>
                <Header
                    title="useState"
                    isRedux={false}
                    count={count}
                    resetCount={() => setCount(0)}
                />
                <div className="flex items-center justify-center flex-col mt-20">
                    <h2>State management with useState</h2>
                    <p>Count {count}</p>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <Header
                    title="redux"
                    isRedux={true}
                    count={count}
                    resetCount={() => setCount(0)}
                />
                <div className="flex items-center justify-center flex-col mt-20">
                    <h2>State management with redux</h2>
                    <p>Count {value}</p>
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-green-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};
const rootNode = document.getElementById("app");
ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    rootNode
);
