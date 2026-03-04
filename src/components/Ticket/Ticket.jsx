import React from "react";

const Ticket = () => {
  return (
    <div className="w-11/12 mx-auto mt-15">
      <h1 className="text-2xl mb-10 text-gray-600 font-bold">
        Customer Tickets
      </h1>
      <div className="card w-96 bg-base-100 card-sm shadow-md">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-lg">Login Issue</h2>
            <div className="badge badge-soft badge-success font-bold">
              <div aria-label="success" className="status status-success"></div>
              Success
            </div>
          </div>
          <p className="text-gray-400">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="justify-end card-actions text-gray-500 font-semibold">
            <p className="id">#1001</p>
            <p className="priority">HIGH PRIORITY</p>
            <p className="c_name">John Smith</p>
            <p className="date">1/15/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
