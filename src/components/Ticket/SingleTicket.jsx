import { MdOutlineCalendarToday } from "react-icons/md";

const SingleTicket = ({ ticket, handleTask }) => {
  const { id, title, description, priority, status, customer, createdAt } =
    ticket;

  const priorityColors = () => {
    if (priority === "low") {
      return "badge badge-sm badge-soft badge-success";
    } else if (priority === "medium") {
      return "badge badge-sm badge-soft badge-warning ";
    } else if (priority === "high") {
      return "badge badge-sm badge-soft badge-error ";
    }
  };
  return (
    <div className="card w-full bg-base-100 card-sm shadow-md">
      <a onClick={() => handleTask(id)} className="cursor-pointer">
        <div className="card-body">
          <div className="flex justify-between gap-2 items-center">
            <h2 className="card-title  flex-1 text-md lg:text-lg">{title}</h2>
            <div
              className={
                status === "open"
                  ? " badge-success " + "flex-none badge badge-soft font-bold"
                  : status === "in-progress"
                    ? " badge-warning " + "flex-none badge badge-soft font-bold"
                    : " badge-neutral " + "flex-none badge badge-soft font-bold"
              }
            >
              <div
                aria-label="success"
                className={
                  status === "open"
                    ? "status status-success"
                    : status === "in-progress"
                      ? "status status-warning"
                      : "status status-neutral"
                }
              ></div>
              {status}
            </div>
          </div>
          <p className="text-gray-400">{description}</p>
          <div className="justify-end card-actions text-gray-500 font-semibold">
            <p className="id">#{id}</p>
            <p className={priorityColors()}>
              {priority.toUpperCase()} PRIORITY
            </p>
            <p className="c_name">{customer}</p>
            <p className="flex items-center gap-1">
              <MdOutlineCalendarToday className="text-lg" />
              {createdAt}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleTicket;
