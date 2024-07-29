/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utils/formatDate";
import axios from "axios";
import { Trash } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ReviewAdmin() {
  const currentDateToDisplay = formatDate();
  const [formDataList, setFormDataList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queries, setQueries] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<any[]>("/api/review_api");
        setFormDataList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this section?"
      );
      if (!confirm) {
        return;
      }
      await axios.delete(`/api/review_api?id=${id}`);
      const updatedQueries = queries.filter(
        (query: { _id: string }) => query._id !== id
      );
      setQueries(updatedQueries);
      toast.success("Query deleted successfully");
    } catch (error) {
      console.error("Error deleting query:", error);
      toast.error("Failed to delete query");
    }
  };

  return (
    <main className="py-8 flex flex-col gap-4">
      <div>
        <Toaster position="top-center" reverseOrder={false} />

        <h4 className="font-bold text-primary">Welcome back!</h4>
        <span>{currentDateToDisplay}</span>
      </div>
      <section className="flex flex-col bg-white rounded-xl">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Review
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {formDataList.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center text-sm font-medium text-gray-800">
                        <img
                          src={item.profileUrl}
                          alt={`${item.name}'s image`}
                          className="w-20 h-20 object-cover"
                        />
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.review}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={"#"}
                            onClick={() => handleDelete(item._id)}
                            style={{
                              borderBottomWidth: 0,
                              backgroundImage: "none",
                              transition: "none",
                            }}
                          >
                            <Trash size={20} className="text-destructive" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
