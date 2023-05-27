import React from "react";

const TableData = ({ data }) => {
  const { name, status } = data;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{status}</td>
      </tr>
    </tbody>
  );
};

export default TableData;
