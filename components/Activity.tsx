import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Card, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const activities = [
  {
    time: "8:00",
    color: "success.main",
    text: "History Class",
  },
  {
    time: "08:40",
    color: "secondary.main",
    text: "English class",
  },
  {
    time: "9:15",
    color: "primary.main",
    text: "Break",
  },
  {
    time: "09.48",
    color: "warning.main",
    text: "I will sing amongus theme song",
  },
  {
    time: "09.49",
    color: "error.main",
    text: "Becoming lord saardoo",
  },
];

const Activity = () => {
  
  return (
    <div className="bg-white rounded-3xl   shadow-lg mt-5 p-5 py-5">
      <p className="mb-2">Daily Activity</p>
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
