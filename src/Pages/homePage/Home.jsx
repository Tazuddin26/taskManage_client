import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AllTask from "../../components/AllTask";
import ShowTasks from "../../components/ShowTasks";
import useAxiosPublic from "../../useHooks/useAxiosPublic";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [categoryFilter, setCategoryFilter] = useState("All Category");
  const [statusFilter, setStatusFilter] = useState("All Task");
  const [filteredTasks, setFilteredTasks] = useState([]);
  console.log("filter data", filteredTasks);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allTasks");
      return res.data;
    },
  });
  useEffect(() => {
    let filtered = tasks;
    if (categoryFilter !== "All Category") {
      filtered = filtered.filter((task) => task.category === categoryFilter);
    }
    if (statusFilter !== "All Task") {
      filtered = filtered.filter((task) => task.status === statusFilter);
    }
    setFilteredTasks(filtered);
  }, [categoryFilter, statusFilter, tasks]);
  return (
    <div className=" lg:mx-10 bg-white rounded-md shadow-xl border border-gray-300 p-4">
      <AllTask
        refetch={refetch}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <div className="mt-10">
        <ShowTasks tasks={filteredTasks} />
      </div>
    </div>
  );
};

export default Home;
