import { formatDate } from "@/utils/formatDate";
import axios from "axios";
import { Delete, Edit, Edit2, Reply, TicketCheck, Trash } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Query() {
  const currentDateToDisplay = formatDate();
  const [formDataList, setFormDataList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [queries, setQueries] = useState<any>([]);
  const [replyText, setReplyText] = useState<string>("");
  const [replyingToEmail, setReplyingToEmail] = useState<string>("");
  const [replyingId, setReplyingId] = useState<string>("");
  const [isReplySent, setIsReplySent] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<any[]>("/api/query");
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
      await axios.delete(`/api/query?id=${id}`);
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

  const handleReply = (email: string, id: string) => {
    setReplyingToEmail(email);
    setReplyingId(id);
    setReplyText("");
    setIsReplySent(false);
  };

  const sendReply = async (userName: string) => {
    const logoUrl = "https://jojotoursrwanda.com/logo.png";

    try {
      const emailHTML = `
        <div style="">
          <p>Dear ${userName},</p>
          <p>${replyText}</p>
          <p>Best Regards,<br>JOJO Tours Ltd Team</p>
          <img src="${logoUrl}" alt="Company Logo" style="max-width: 100px; margin-bottom: 20px;">

        </div>
      `;

      // Send reply email
      await axios.post("/api/send-email", {
        to: replyingToEmail,
        subject: "Response to Your Inquiry | GHA",
        text: replyText,
        html: emailHTML,
      });

      await axios.put(`/api/query?id=${replyingId}`, {
        replied: true,
        replyText: replyText,
      });
      const response = await axios.get<any>("/api/query");
      setQueries(response.data);
      toast.success("Reply sent successfully");
      setIsReplySent(true);
    } catch (error) {
      console.error("Error replying to query:", error);
      toast.error("Failed to send reply, try again!");
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
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Message
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          {item.email && (
                            <>
                              {!isReplySent && replyingId === item._id ? (
                                <>
                                  <textarea
                                    value={replyText}
                                    onChange={(e) =>
                                      setReplyText(e.target.value)
                                    }
                                    rows={3}
                                    className="mt-2 p-2 border border-gray-300 rounded"
                                  ></textarea>
                                  <button
                                    onClick={() => sendReply(item.name)}
                                    className="mt-2 bg-primary text-white rounded-xl p-2"
                                  >
                                    Send
                                  </button>
                                </>
                              ) : item.replied == true ? (
                                <>
                                  {item.replyText && (
                                    <div>{item.replyText}</div>
                                  )}
                                  <span className="p-1 text-sm rounded-xl text-accent">
                                    <TicketCheck />
                                  </span>
                                </>
                              ) : (
                                <Link
                                  href={"#"}
                                  onClick={() =>
                                    handleReply(
                                      item.email as string,
                                      item._id as string
                                    )
                                  }
                                  style={{
                                    borderBottomWidth: 0,
                                    backgroundImage: "none",
                                    transition: "none",
                                  }}
                                >
                                  <Reply size={20} className="" />
                                </Link>
                              )}
                            </>
                          )}
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
