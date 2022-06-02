import React from "react";
import { DropdownField } from "./DropdownField";
import { FileField } from "./FileFIeld";
import { SelectField } from "./SelectField";
import { TextareaField } from "./TextareaField";
import { TextField } from "./TextField";

class Field extends React.Component {
  render() {
    if (this.props.field.type === "dropdown") {
      return (<DropdownField field={this.props.field} />);
    } else if (this.props.field.type === "select") {
      return (<SelectField field={this.props.field} />);
    } else if (this.props.field.type === "file") {
      return (<FileField field={this.props.field} />);
    } else if (this.props.field.type === "textarea") {
      return (<TextareaField field={this.props.field} />);
    } else {
      return (<TextField field={this.props.field} />);
    }
  }
}

export { Field }
