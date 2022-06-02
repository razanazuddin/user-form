import React from "react";

class FileField extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     value: [] || ""  
    };

    this.props.field.value = this.props.field.value || "";

    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeFile(event) {
    this.props.field.value = event.target.files[0];
  };

  render() {
    return (
      <div className="my-4 block">
        <label className="mb-2 block">
          {this.props.field.label}
          {this.props.field.required ? <span className="mx-1 text-rose-900">*</span> : null}
        </label>
        <input type="file" className="w-full" onChange={this.handleChangeFile} />
      </div>
    );
  };
}

export { FileField }
