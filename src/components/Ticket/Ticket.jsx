import { useEffect, useState } from "react";
import SingleTicket from "./SingleTicket";
import Task from "./Task";
import Progress from "../Progress/Progress";

const Ticket = () => {
  const [ticketData, setTicketData] = useState([]);
  const [task, setTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => setTicketData(data));
  }, []);

  const handleTask = (id) => {
    const upatedTask = [...task, id];
    setTask(upatedTask);
  };
  const handleCompleteTask = (id) => {
    const updatedCompletedTask = [...completedTask, id];
    setCompletedTask(updatedCompletedTask);
    setTask(task.filter((t) => t !== id));
    setResolvedTask([...resolvedTask, id]);
  };

  return (
    <>
      <Progress task={task} resolvedTask={resolvedTask}></Progress>
      <div className="w-full px-2 lg:w-11/12 mx-auto my-15 flex flex-col lg:flex-row gap-10 ">
        <div className="customer-tickets w-full lg:w-2/3">
          <h1 className="text-2xl ml-5 mb-10 text-gray-800 font-bold">
            Customer Tickets
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {ticketData.map((ticket) => (
              <SingleTicket
                key={ticket.id}
                ticket={ticket}
                handleTask={handleTask}
              />
            ))}
          </div>
        </div>
        <div className="task w-full lg:w-1/3  ">
          <div className="task-status text-2xl  mb-10 text-gray-800 font-bold">
            <h1>Task Status</h1>
            <div className="flex flex-col mt-5">
              {task.length === 0 ? (
                <p className=" text-sm text-gray-400 font-medium ">
                  Select a ticket to add to Task Status
                </p>
              ) : (
                ticketData.map(
                  (td) =>
                    task.includes(td.id) && (
                      <Task
                        key={td.id}
                        handleCompleteTask={handleCompleteTask}
                        td={td}
                      ></Task>
                    ),
                )
              )}
            </div>
          </div>
          <div className="task-resolved text-2xl mb-10 text-gray-800 font-bold">
            <h1 className>Task Resolved</h1>
            <div className=" mt-5 ">
              {resolvedTask.length === 0 ? (
                <p className="text-gray-400 font-normal text-sm">
                  No resolved tasks yet.
                </p>
              ) : (
                ticketData.map(
                  (td) =>
                    resolvedTask.includes(td.id) && (
                      <div>
                        <div className="card flex flex-col  justify-between  ">
                          <div
                            className=" card-body bg-blue-100 mt-4 rounded-md shadow-sm "
                            key={td.id}
                          >
                            {td.title}
                          </div>
                        </div>
                      </div>
                    ),
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
