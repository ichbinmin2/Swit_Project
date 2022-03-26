import React from "react";

interface MessageItemProps {
  data: Message;
}

// 현재 로그인한 유저의 id 는 "antpenguin"  이다라고 가정!
const loggedInUserId = "antpenguin";

const MessageItem = ({ data }: MessageItemProps) => {
  return (
    <li>
      <span>{(data.userId === loggedInUserId ? "*" : "") + data.userName}</span>
      <div>{data.content}</div>
      <span>{data.date}</span>
    </li>
  );
};

export default MessageItem;
