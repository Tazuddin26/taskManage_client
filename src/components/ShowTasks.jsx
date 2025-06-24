import { GoTrash } from "react-icons/go";
import { FaArrowsToDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ShowTasks = ({ tasks }) => {
  const navigate = useNavigate();
  // const {_id, category, description, dateTime} = tasks
  return (
    <>
      <div className=" grid grid-cols-1 mt-4 sm:grid-cols-3 gap-3">
        {Array.isArray(tasks) ? (
          tasks.map((task) => (
            <div
              key={task._id}
              className="w-full px-3 py-4 bg-white/10 rounded-lg shadow-md border border-gray-300 cursor-pointer"
              onClick={() => navigate(`taskDetails/${task._id}`)}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-700 hover:underline flex items-center gap-2">
                  <p className="w-10 h-10 rounded-full bg-[#60E5AE] flex items-center justify-center">
                    <FaArrowsToDot className="" />
                  </p>
                  {task.category}
                </span>
                <p className=" text-sm font-bold text-orange-500 transition-colors duration-300 transform  rounded cursor-pointer hover:text-orange-400">
                  <GoTrash size={20} />
                </p>
              </div>

              <div className="mt-2 mx-4">
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {task.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    className="hidden object-cover w-8 h-8 rounded-full sm:block"
                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                    alt="avatar"
                  />
                  <p
                    className="text-sm text-gray-700 cursor-pointer "
                    role="link"
                  >
                    {new Date(task.dateTime).toLocaleString("en-BD", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div
                  className={`${
                    task.status === "InProgress"
                      ? "text-[#DD9221]"
                      : task.status === "Done"
                      ? "text-green-500"
                      : task.status === "Pending"
                      ? "text-pink-500"
                      : "text-gray-500"
                  }`}
                >
                  <span className="">{task.status}</span>
                </div>{" "}
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </>
  );
};

export default ShowTasks;
