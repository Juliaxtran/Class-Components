import React from "react"
import './Count.css'

export default class Count extends React.Component {
    // const [goOut, setGoOut] = React.useState("Yes")

    state = {
        goOut: "Yes"
    }

    toggleGoOut = () => {
        this.setState(prevState => {
            return {
              goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }

    render() {
        return (
            <div className="state">
                <h1 className="state--title">Should I go out tonight?</h1>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
