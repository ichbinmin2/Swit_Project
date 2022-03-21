import React, { useState } from "react";
import { sent } from "../store/chattingReducer";

const ChattingForm = ({ dispatch }) => {
  const [input, setInput] = useState("");
  const disabled = input === "";

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          sent({
            id: "test id 1",
            userId: "jamong",
            userName: "pingoo",
            profileImage: "https://image.jpeg", // 이미지 주소
            content: input,
            date: new Date().toLocaleString(),
          })
        );
      }}
    >
      <textarea value={input} onChange={handleChange}></textarea>
      <button type="submit" disabled={disabled}>
        보내기
      </button>
    </form>
  );
};

export default ChattingForm;
