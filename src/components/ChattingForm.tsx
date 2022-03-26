import React, { useState } from "react";
import { sent } from "../store/chattingReducer";

const ChattingForm = ({ dispatch }) => {
  const [input, setInput] = useState("");
  const disabled = input === "";

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }

  function sumbit(){
    dispatch(
      sent({
        id: Date.now().toString(),
        userId: "jamong",
        userName: "pingoo",
        profileImage: "https://image.jpeg", // 이미지 주소
        content: input.trim(),
        date: new Date().toLocaleString(),
      })
    );

    setInput("");
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sumbit(); 
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sumbit();
      }}
    >
      <textarea
        value={input}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      ></textarea>
      <button type="submit" disabled={disabled}>
        보내기
      </button>
    </form>
  );
};

export default ChattingForm;
