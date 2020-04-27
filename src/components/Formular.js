import React, {Component} from "react";

class Forumlar extends Component {

    state = {dataFromUser: " "};

    onSubmitForm(e) {
        e.preventDefault();
        console.log(e.target.elements.test.value)

        this.setState({dataFromUser:e.target.elements.test.value});
    }

    render() {

        return(
            <div>

                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <input type="text" name={"test"} placeholder="full name.."></input>
                    <input type="text" name={"test"} placeholder="phone number.."></input>
                    <input type="email" name={"test"} placeholder="mail.."></input>
                    <button> Submit </button>
                </form>

                <div>
                    data från användare: 
                    {this.state.dataFromUser}
                </div>

            </div>
        )
    }

}

export default Forumlar;