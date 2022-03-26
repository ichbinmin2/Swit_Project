import React from "react";

interface ChattingListProps {
  data: Array<Message>;
}

const ChattingList = ({ data }: ChattingListProps) => {
  return (
    <ul>
      {data.map((msg) => (
        <li key={msg.id}>{msg.content}</li>
      ))}
    </ul>
  );
};

export default ChattingList;
