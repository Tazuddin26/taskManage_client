import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../useHooks/useAxiosPublic";
import { FaArrowsToDot } from "react-icons/fa6";
import { BiSolidEditAlt } from "react-icons/bi";
import UseSelectOption from "../hooks/useSelectOption";
import AddToTask from "./AddToTask";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
const UpdateTask = ({ isOpen, onClose, tasks, refetch }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  console.log("edit task", tasks);
  // const statusOption = ["InProgress", "Pending", "Collaborative Task", "Done"];
  // const {
  //   data: tasks = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/task/${id}`);
  //     console.log("task details", res.data);
  //     return res.data;
  //   },
  // });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (tasks) {
      reset({
        category: tasks?.category,
        startDate: tasks?.startDate,
        endDate: tasks?.endDate,
        description: tasks?.description,
      });
    }
  }, [tasks, reset]);

  const onSubmit = async (data) => {
    console.log("edit data", data);
    const defaultTask = {
      category: data?.category,
      startDate: data?.startDate,
      endDate: data?.endDate,
      description: data?.description,
    };
    const res = await axiosPublic.put(`/editTask/${id}`, defaultTask);
    console.log("edited task data", res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Task is Updated Successfully!");
      reset();
      refetch();

      //   navigate("/home");
    }
  };
  if (!isOpen) return null;
  return (
    // <div className=" lg:mx-10 bg-white rounded-md shadow-xl border border-gray-300 p-6">
    //   <div className="lg:p-6 mb-3">
    //     <div className="flex items-center justify-between">
    //       <div>
    //         <h1 className="lg:text-2xl text-xl font-bold mb-4">
    //           Status Update
    //         </h1>
    //       </div>
    //       <div className="mb-2 ">
    //         {/* <button className="btn bg-[#FFAB001A] hover:bg-[#FFAB003A] border-none lg:px-6 py-1 lg:mr-5 mr-2 ">
    //           <span className="flex items-center text-[#FFAB00] gap-1">
    //             <BiSolidEditAlt size={20} />
    //             Edit Task
    //           </span>
    //         </button> */}
    //         <button
    //           onClick={() => navigate(`/home`)}
    //           className="btn bg-[#60E5AE] px-10 "
    //         >
    //           Back
    //         </button>
    //       </div>
    //     </div>
    //     <hr className="border-gray-300 " />
    //   </div>

    //   <div className="lg:flex gap-5 w-full">
    //     <p className="w-20 h-20 rounded-full bg-[#60E5AE] flex items-center justify-center">
    //       <FaArrowsToDot size={40} className="" />
    //     </p>
    //     <div className="w-full gap-4 space-y-4 ">
    //       <span className="text-2xl font-bold text-gray-700 hover:underline flex items-center gap-2">
    //         {tasks.category}
    //       </span>
    //       <div className="mt-2 max-h-screen">
    //         <p className="mt-2 text-gray-600 ">
    //           {tasks.description} Lorem ipsum, dolor sit amet consectetur
    //           adipisicing elit. Aut corporis dolore, ad voluptatem minima
    //           laboriosam a. Libero optio pariatur ex in nobis, itaque inventore?
    //           Accusamus veritatis repudiandae aliquid mollitia numquam? Lorem
    //           ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
    //           aliquam esse fugit, nam earum officia architecto non? Possimus
    //           incidunt consectetur dolorem quos praesentium? Laboriosam, dolores
    //           in. Rem quas quaerat minima. Lorem ipsum dolor sit amet
    //           consectetur adipisicing elit. Expedita numquam sapiente doloribus
    //           corporis voluptate voluptas vero. Vitae quasi alias libero enim
    //           culpa corrupti totam qui pariatur facilis? Ipsa, commodi quam?
    //         </p>
    //       </div>
    //       <div className="flex items-center mt-10 ">
    //         <div className="w-full flex items-center lg:gap-20 gap-4 ">
    //           <div className="flex w-full flex-row">
    //             <div className="">
    //               <div className=" space-y-4">
    //                 <p className="text-gray-700 font-semibold">End Date</p>
    //                 <div className="flex items-center gap-4">
    //                   <img
    //                     className=" object-cover w-8 h-8 rounded-full sm:block"
    //                     src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
    //                     alt="avatar"
    //                   />
    //                   <p
    //                     className=" text-gray-700 cursor-pointer lg:text-xl "
    //                     role="link"
    //                   >
    //                     {new Date(tasks?.dateTime).toLocaleString("en-BD", {
    //                       weekday: "long",
    //                       year: "numeric",
    //                       month: "long",
    //                       day: "numeric",
    //                     })}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="divider divider-horizontal"></div>
    //             <div className="flex items-center">
    //               <div
    //                 className={`${
    //                   tasks.status === "InProgress"
    //                     ? "text-[#DD9221]"
    //                     : tasks.status === "Done"
    //                     ? "text-[#21D789]"
    //                     : tasks.status === "Pending"
    //                     ? "text-[#E343E6]"
    //                     : "text-gray-500"
    //                 } `}
    //               >
    //                 <span className="lg:text-3xl text-xl ">{tasks.status}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full mt-10 ">
    //         <UseSelectOption
    //           defaultValue={tasks.status}
    //           options={statusOption}
    //           label="Change Status"
    //           disabled={false}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" lg:mt-20 my-4 flex sm:justify-end  justify-center gap-5 lg:p-6">
    //     <button className="btn px-12 border-none bg-[#FF4C2426] hover:bg-[#FF4C2446] text-[#FF4C24]">
    //       Delete Task
    //     </button>
    //     <button className="btn px-16 bg-[#60E5AE] ">Submit</button>
    //   </div>
    // </div>
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
                    defaultValue={tasks?.category}
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

                <div>
                  <label className="text-gray-700 ">Start Date</label>
                  <input
                    defaultValue={tasks?.startDate}
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
                    defaultValue={tasks?.description}
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
                    defaultValue={tasks?.endDate}
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

export default UpdateTask;
