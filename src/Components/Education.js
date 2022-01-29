import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          institutionName: "",
          role: "",
          startYear: "",
          endYear: "",
          educationDescription: "",
        },
      ],
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
      <div className="work--experience">
        <form onSubmit={this.handleSubmit}>
          Education
          <input
            className="form--input"
            name="institutionName"
            type="text"
            placeholder="Institution Name"
            onChange={this.handleChange}
            value={this.state.institutionName}
          />
          <input
            className="form--input"
            name="role"
            type="text"
            placeholder="Role"
            onChange={this.handleChange}
            value={this.state.role}
          />
          <input
            className="form--input"
            name="startYear"
            type="number"
            placeholder="Start Year"
            onChange={this.handleChange}
            value={this.state.startYear}
          />
          <input
            className="form--input"
            name="endYear"
            type="number"
            placeholder="Finish Year"
            onChange={this.handleChange}
            value={this.state.endYear}
          />
          <textarea
            className="form--input"
            name="educationDescription"
            type="text"
            placeholder="Education Description"
            onChange={this.handleChange}
            value={this.state.educationDescription}
          />
        </form>
        ;
      </div>
    );
  }
}

export default Education;
