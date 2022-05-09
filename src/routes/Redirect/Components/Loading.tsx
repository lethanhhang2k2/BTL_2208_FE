import React from "react";
import loading_gif from "../../../assets/images/loading.gif";

export default class Loading extends React.Component {
    render() {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-[#e9e9eb]">
                <img src={loading_gif} alt="loading" />
            </div>
        );
    }
}

