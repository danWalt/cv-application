import React from "react";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  }

  //this.setState is async
  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="info--div">
        <form onSubmit={this.handleSubmit}>
          Contact Information
          <input
            className="form--input"
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={this.handleChange}
            value={this.state.fullName}
          ></input>
          <input
            className="form--input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <input
            className="form--input"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={this.handleChange}
            value={this.state.phoneNumber}
          ></input>
        </form>
        ;
      </div>
    );
  }
}

export default ContactInfo;
