import React from "react";
import { render, screen } from "@testing-library/react";
import { TEST_MESSAGE, TEST_MESSAGE_2 } from "../fixture";
import ChattingList from "./ChattingList";



describe("ChattingList", () => {
  // 가정 : 서버에서 채팅은 시간 순으로 온다
  it("render chatting list", () => {
    render(<ChattingList data={[TEST_MESSAGE, TEST_MESSAGE_2]} />);

    screen.getByText(TEST_MESSAGE.content);
    screen.getByText(TEST_MESSAGE_2.content);
  });
});
