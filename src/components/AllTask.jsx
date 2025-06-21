import FilterCategory from "./FilterCategory";
import TaskStatus from "./TaskStatus";
import { TiDocumentAdd } from "react-icons/ti";
import { useState } from "react";
import AddToTask from "./AddToTask";

const AllTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("open", isModalOpen);
  return (
    <div>
      <div className="w-full flex gap-10 px-3 ">
        <div className="w-5/12">
          <h1 className="text-2xl font-bold">All Task List</h1>
        </div>
        <div className="w-7/12 flex justify-between">
          <FilterCategory />
          <TaskStatus />
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-success"
            >
              <TiDocumentAdd size={20} />
              Add New Task
            </button>
          </div>
        </div>
      </div>
      <AddToTask isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AllTask;
