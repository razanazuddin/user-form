const formFields = [
  {
    "label": "First Name",
    "type": "text",
    "required": true
  },
  {
    "label": "Last Name",
    "type": "text",
    "required": true
  },
  {
    "label": "Email",
    "type": "Email",
    "required": true
  },
  {
    "label": "Phone Number",
    "type": "number",
    "length": "10",
    "required": false
  },
  {
    "label": "Field of Interest",
    "type": "select",
    "options": [
      "Accountant",
      "Engineering",
      "Information Technology",
      "Others"
    ],
    "required": true
  },
  {
    "label": "Years of Experience",
    "type": "dropdown",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "5+ Years"
    ],
    "required": true,
    "isSubfield": [
      "Accountant",
      "Engineering",
      "Information Technology"
    ]
  },
  {
    "label": "Company Name",
    "type": "text",
    "required": false,
    "isSubfield": [
      "Accountant",
      "Engineering",
      "Information Technology"
    ]
  },
  {
    "label": "Describe",
    "type": "textarea",
    "length": "200",
    "required": true,
    "isSubfield": ["Others"]
  },
  {
    "label": "Upload CV",
    "type": "file",
    "required": false
  }
];

module.exports = formFields;
