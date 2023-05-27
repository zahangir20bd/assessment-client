import React from "react";

const ContactTableData = ({ contact }) => {
  const { country, contact_info } = contact;
  return (
    <tbody>
      <tr>
        <td>{country}</td>
        <td>{contact_info}</td>
        <td>
          <button className="btn btn-link">Details</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ContactTableData;
