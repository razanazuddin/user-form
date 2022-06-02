import * as React from "react";
import formFields from "../formFields";
import { Field } from "./Field";

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     keywords: '',
     city: '',
     date: ''     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    return ( 
      <form onSubmit={this.handleSubmit} className="px-20 mx-auto py-12 w-1/2 bg-white">
        <h2 className="my-4 text-2xl">Personal details</h2>
        {formFields.map((field, index) => (
          !field.isSubfield ? <Field field={field} key={index} onChange={this.handleChange} />
          : field.type === "select" && field.value ? formFields.filter((field) => field.isSubfield).map((field, index) => (
            <Field field={field} key={index} onChange={this.handleChange} />
          ))
          : null
        ))}
        <button type="submit" className="px-4 py-2 my-4 rounded bg-slate-100 hover:bg-slate-200">Submit</button>
      </form>
    )
  }
}

export { Form }