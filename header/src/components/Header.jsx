import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../index.scss";

import { clear } from "redux/features/counterSlice";

function Header(props) {
    const { count, resetCount, title, isRedux } = props;
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="test bg-blue-700 text-white font-bold text-3xl p-5 flex justify-between">
            <div>
                <h2>{title}</h2>
            </div>

            {isRedux ? (
                <div className="flex items-center justify-center space-x-8  ">
                    <h4 className="text-yellow-500">Count: {value}</h4>
                    <button
                        onClick={() => dispatch(clear())}
                        className="bg-green-600 text-white fonst-semibold py-2 px-4 rounded"
                    >
                        Clear Cart
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center space-x-8  ">
                    <h4 className="text-red-700">Count: {count} </h4>
                    <button
                        onClick={resetCount}
                        className="bg-green-600 text-white fonst-semibold py-2 px-4 rounded"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}
export default Header;
