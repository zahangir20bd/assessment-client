import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ContactTableData from "./ContactTableData";
import "./style.css";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allcontacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  const usContacts = contacts.filter((contact) => contact.country === "US");

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            id="allContacts"
            data-bs-toggle="modal"
            data-bs-target="#allContactsModal"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#UsContactsModal"
          >
            US Contacts
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="allContactsModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                All Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Contact Info</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                {contacts.map((contact) => (
                  <ContactTableData
                    key={contact._id}
                    contact={contact}
                  ></ContactTableData>
                ))}
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                All Contacts
              </button>
              <button type="button" class="btn btn-warning">
                US Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="UsContactsModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Us Contacts
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Contact Info</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                {usContacts.map((contact) => (
                  <ContactTableData
                    key={contact._id}
                    contact={contact}
                  ></ContactTableData>
                ))}
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                All Contacts
              </button>
              <button type="button" class="btn btn-warning">
                US Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
