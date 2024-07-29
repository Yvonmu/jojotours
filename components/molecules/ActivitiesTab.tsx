import { ActivitiesDetails } from "@/utils/activitiesData";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type ActivityTabProps = {
  tabName: string;
};

export default function ActivitiesTab({ tabName }: ActivityTabProps) {
  const filteredActivities = ActivitiesDetails.filter(
    (activity) => activity.type === tabName
  );

  return (
    <div>
      <h4 className="font-bold">Recent posts</h4>
      <div className="grid md:grid-cols-3 xl:grid-cols-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <Link
              href={`/activities/${activity.slug}`}
              key={index}
              className="p-4" style={{
                borderBottomWidth: 0,
                backgroundImage: "none",
                transition: "none",
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img
                  src={activity.imageUrl}
                  alt={activity.name}
                  className="w-full h-[200px] mb-2 rounded-xl"
                />

                <h3 className="font-bold">{activity.name}</h3>
                <p className="text-sm text-gray-600">{activity.datePosted}</p>
                <p className="mt-2">{activity.description}</p>
              </motion.div>
            </Link>
          ))
        ) : (
          <p>No Recent activities found for this type.</p>
        )}
      </div>
    </div>
  );
}
