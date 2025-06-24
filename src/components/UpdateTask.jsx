import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../useHooks/useAxiosPublic";
import { FaArrowsToDot } from "react-icons/fa6";
import { BiSolidEditAlt } from "react-icons/bi";
import UseSelectOption from "../hooks/useSelectOption";
const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const statusOption = ["InProgress", "Pending", "Collaborative Task", "Done"];
  const {
    data: tasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/task/${id}`);
      console.log("task details", res.data);
      return res.data;
    },
  });
  return (
    <div className=" lg:mx-10 bg-white rounded-md shadow-xl border border-gray-300 p-6">
      <div className="lg:p-6 mb-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="lg:text-2xl text-xl font-bold mb-4">
              Status Update
            </h1>
          </div>
          <div className="mb-2 ">
            {/* <button className="btn bg-[#FFAB001A] hover:bg-[#FFAB003A] border-none lg:px-6 py-1 lg:mr-5 mr-2 ">
              <span className="flex items-center text-[#FFAB00] gap-1">
                <BiSolidEditAlt size={20} />
                Edit Task
              </span>
            </button> */}
            <button
              onClick={() => navigate(`/home`)}
              className="btn bg-[#60E5AE] px-10 "
            >
              Back
            </button>
          </div>
        </div>
        <hr className="border-gray-300 " />
      </div>

      <div className="lg:flex gap-5 w-full">
        <p className="w-20 h-20 rounded-full bg-[#60E5AE] flex items-center justify-center">
          <FaArrowsToDot size={40} className="" />
        </p>
        <div className="w-full gap-4 space-y-4 ">
          <span className="text-2xl font-bold text-gray-700 hover:underline flex items-center gap-2">
            {tasks.category}
          </span>
          <div className="mt-2 max-h-screen">
            <p className="mt-2 text-gray-600 ">
              {tasks.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aut corporis dolore, ad voluptatem minima
              laboriosam a. Libero optio pariatur ex in nobis, itaque inventore?
              Accusamus veritatis repudiandae aliquid mollitia numquam? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              aliquam esse fugit, nam earum officia architecto non? Possimus
              incidunt consectetur dolorem quos praesentium? Laboriosam, dolores
              in. Rem quas quaerat minima. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Expedita numquam sapiente doloribus
              corporis voluptate voluptas vero. Vitae quasi alias libero enim
              culpa corrupti totam qui pariatur facilis? Ipsa, commodi quam?
            </p>
          </div>
          <div className="flex items-center mt-10 ">
            <div className="w-full flex items-center lg:gap-20 gap-4 ">
              <div className="flex w-full flex-row">
                <div className="">
                  <div className=" space-y-4">
                    <p className="text-gray-700 font-semibold">End Date</p>
                    <div className="flex items-center gap-4">
                      <img
                        className=" object-cover w-8 h-8 rounded-full sm:block"
                        src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                        alt="avatar"
                      />
                      <p
                        className=" text-gray-700 cursor-pointer lg:text-xl "
                        role="link"
                      >
                        {new Date(tasks?.dateTime).toLocaleString("en-BD", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex items-center">
                  <div
                    className={`${
                      tasks.status === "InProgress"
                        ? "text-[#DD9221]"
                        : tasks.status === "Done"
                        ? "text-[#21D789]"
                        : tasks.status === "Pending"
                        ? "text-[#E343E6]"
                        : "text-gray-500"
                    } `}
                  >
                    <span className="lg:text-3xl text-xl ">{tasks.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 ">
            <UseSelectOption
              defaultValue={tasks.status}
              options={statusOption}
              label="Change Status"
              disabled={false}
            />
          </div>
        </div>
      </div>
      <div className=" lg:mt-20 my-4 flex sm:justify-end  justify-center gap-5 lg:p-6">
        <button className="btn px-12 border-none bg-[#FF4C2426] hover:bg-[#FF4C2446] text-[#FF4C24]">
          Delete Task
        </button>
        <button className="btn px-16 bg-[#60E5AE] ">Submit</button>
      </div>
    </div>
  );
};

export default UpdateTask;
