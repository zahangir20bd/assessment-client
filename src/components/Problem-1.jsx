import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const Problem1 = () => {
  const [allData, setAllData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;
    const data = { name, status };
    console.log(name, status);

    fetch("http://localhost:5000/alldata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Insert a Data Successfully");
          form.reset();
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  const [show, setShow] = useState(allData);
  //   console.log(allData);
  const handleAllData = () => {
    setShow(allData);
  };
  const handleClick = (val) => {
    console.log(val);
    const CategoryData = allData.filter((data) => data.status === val);
    setShow(CategoryData);
    console.log(show);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={handleAllData}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("Active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("Completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {show.map((data) => (
              <TableData key={data._id} data={data}></TableData>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
