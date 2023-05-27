import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ContactTableData = ({ contact }) => {
  const { country, contact_info } = contact;
  const handleDetails = () => {
    alert(contact_info);
  };
  return (
    <>
      <tbody>
        <tr>
          <td>{country}</td>
          <td>{contact_info}</td>
          <td>
            <button className="btn btn-link" onClick={handleDetails}>
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ContactTableData;
