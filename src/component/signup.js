import React from "react";

class SignUP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotDetails: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch("http://localhost:3000/signup")
      .then((res) => res.json()).then(data => this.setState({apiMessage: data}))
      .catch((e) => {
        this.setState({ apiMessage: "Got Error" });
      });
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    if (!this.state.gotDetails) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:-
            <input name="name" type="text" onChange={this.handleInputChange} />
          </label>

          <label>
            Last Name:-
            <input name="lastName" type="text" onChange={this.handleInputChange} />
          </label>

          <label>
            Mobile No.:-
            <input name="mobile" type="text" onChange={this.handleInputChange} />
          </label>

          <label>
            Address:-
            <input name="address" type="text" onChange={this.handleInputChange} />
          </label>
          <input name="Submit" type="submit" />
        </form>
      );
    } else {
      return <div>Do not have anything to show</div>;
    }
  }
}

export default SignUP;
