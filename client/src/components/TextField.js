import React from "react";

class TextField extends React.Component {
  constructor(props) {
    super(props)

    this.props.field.value = this.props.field.value || "";

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.field.value = event.target.value;
    event.preventDefault();
  };

  render() {
    return (
      <div className={`my-4 block ${this.props.field.isSubfield ? "pl-8 border-l-2" : ""}`}>
        <label className="mb-2 block">
          {this.props.field.label}
          {this.props.field.required ? <span className="mx-1 text-rose-900">*</span> : null}
        </label>
        <input type={this.props.field.type} placeholder={this.props.field.label} className="p-2 block border rounded w-full" onChange={this.handleChange} />
      </div>
    );
  };
}

export { TextField }
