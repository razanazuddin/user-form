import React from "react";

class SelectField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     value: ""
    };
  
    this.props.field.value = this.props.field.value || [];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.field.value = event.target.value;
    event.preventDefault();
  };

  render() {
    return (
      <div className="my-4 block">
        <label className="mb-2 block">
          {this.props.field.label}
          {this.props.field.required ? <span className="mx-1 text-rose-900">*</span> : null}
        </label>

        {this.props.field.options.map((option, index) => (
          <label className="block w-full" key={`checkbox-${index}`}>
            <input type="radio" checked={this.props.field.value === option} value={option} className="m-2" onChange={this.handleChange} />
            {option}
          </label>
        ))}
      </div>
    );
  };
}

export { SelectField }
