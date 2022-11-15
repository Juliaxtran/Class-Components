import React from "react"
import './Contact.css'
import user from "../images/user.png"
import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"


export default class Contact extends React.Component {
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    }


 toggleFavorite = () =>  {
        this.setState(prevContact => ({
            isFavorite: !prevContact.isFavorite
        }))
    }

    render () {
      let starIcon = this.state.isFavorite ? {starFilled} : {starEmpty}
      return (
        <main>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img
                        src={starIcon}
                        className="card--favorite"
                        onClick={this.toggleFavorite}
                    />
                    <h2 className="card--name">
                        {this.state.firstName} {this.state.lastName}
                    </h2>
                    <p className="card--contact">{this.state.phone}</p>
                    <p className="card--contact">{this.stateemail}</p>
                </div>

            </article>
        </main>
    )
    }

}
