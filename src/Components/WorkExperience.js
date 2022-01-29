import React from "react";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          companyName: "",
          role: "",
          startYear: "",
          endYear: "",
          jobDescription: "",
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
          Job Experience
          <input
            className="form--input"
            name="companyName"
            type="text"
            placeholder="Company Name"
            onChange={this.handleChange}
            value={this.state.companyName}
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
            name="jobDescription"
            type="text"
            placeholder="Job Description"
            onChange={this.handleChange}
            value={this.state.jobDescription}
          />
        </form>
        ;
      </div>
    );
  }
}

export default WorkExperience;
