import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../useHooks/useAxiosPublic";

const AddToTask = ({ isOpen, onClose, refetch }) => {
  //   const [taskDateTime, setTaskDateTime] = useState("");

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = { ...data, status: "InProgress" };
    try {
      const res = await axiosPublic.post("/addTask", formData);
      console.log("added task data", res.data);
      reset();
      toast.success("Task saved successfully!");
      refetch();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="relative flex justify-center p-6 ">
      <div
        className="fixed inset-0 z-10 overflow-y-auto bg-opacity-40 lg:mt-48 mt-14"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden  sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <div className="relative inline-block border border-gray-300 bg-white/20 backdrop-blur-sm z-50  px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-lg rtl:text-right sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
            <div className="flex items-center justify-center "></div>

            <div className=" text-start ">
              <h3
                className="text-xl font-medium leading-6 text-gray-800 capitalize "
                id="modal-title"
              >
                Create a Task
              </h3>
              <hr className="mt-2 border-gray-300 " />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 ">Task Category</label>
                  <select
                    defaultValue="Select Category"
                    className="select w-full mt-2"
                    name="category"
                    {...register("category", { required: true })}
                  >
                    <option disabled={true}>Select Category</option>
                    <option>Arts & Craft</option>
                    <option>Nature</option>
                    <option>Family</option>
                    <option>Sport</option>
                    <option>Friends</option>
                    <option>Meditation</option>
                  </select>
                </div>
                {/* <div>
                  <label className="text-gray-700 ">Task Status</label>
                  <select
                    defaultValue="Select Status"
                    className="select w-full mt-2"
                    name="status"
                    required
                  >
                    <option disabled={true}>Select Status</option>
                    <option>InProgress</option>
                    <option>Pending</option>
                    <option>Done</option>
                  </select>
                </div> */}

                <div>
                  <label className="text-gray-700 ">Start Date</label>
                  <input
                    type="datetime-local"
                    name="startDate"
                    {...register("startDate", { required: true })}
                    className="border border-gray-300 mt-2 rounded p-2 w-full"
                  />
                  {errors.startDate && (
                    <p className="text-red-500">{errors.startDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-700 ">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    {...register("description", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-gray-700 ">End Date </label>
                  <input
                    type="datetime-local"
                    name="endDate"
                    {...register("endDate", { required: true })}
                    className="border border-gray-300 mt-2 rounded p-2 w-full"
                  />
                  {errors.endDate && (
                    <p className="text-red-500">{errors.endDate.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={onClose}
                  className="btn btn-outline btn-secondary px-6 py-2 leading-5 transition-colors duration-300 transform rounded-md focus:outline-none focus:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success px-8 py-2 leading-5 transition-colors duration-300 transform rounded-md focus:outline-none focus:bg-gray-600"
                >
                  Save
                </button>
              </div>
            </form>

            {/* <div className="mt-5 sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:items-center">
                <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                  Add Task
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default AddToTask;
