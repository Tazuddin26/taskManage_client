import FilterCategory from "./FilterCategory";
import TaskStatus from "./TaskStatus";
import { TiDocumentAdd } from "react-icons/ti";
import { useState } from "react";
import AddToTask from "./AddToTask";
// import ShowTasks from "./ShowTasks";

const AllTask = ({
  refetch,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("open", isModalOpen);
  return (
    <div className="">
      <div className="w-full  gap-10 px-3 relative">
        <div className="w-full lg:flex justify-between space-y-4 ">
          <div className="mt-3">
            <h1 className="text-2xl font-bold">All Task List</h1>
          </div>
          <div className=" lg:flex gap-3 space-y-3">
            <div className="flex gap-3 ">
              <FilterCategory
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
              />
              <TaskStatus
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
              />
            </div>
            <div className=" ">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-[#60E5AE]"
              >
                <TiDocumentAdd size={20} />
                Add New Task
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="absolute ">
              <AddToTask
                refetch={refetch}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <ShowTasks /> */}
    </div>
  );
};

export default AllTask;
