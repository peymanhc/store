import React from "react";
import "./styles.css";

const SimpleTable = ({children,column}) => {
  return (
    <table id="myTable" className="responsive-table">
      <thead>
        <tr>
          {column?.map((item, i) => (
            <th key={i} scope="col">{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default SimpleTable;
