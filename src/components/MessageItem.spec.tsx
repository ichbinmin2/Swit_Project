import React from "react";
import { render, screen } from "@testing-library/react";
import { TEST_MESSAGE, TEST_MESSAGE_2 } from "../fixture";
import MessageItem from "./MessageItem";

describe("MessageItem", () => {
  // 가정 : 서버에서 채팅은 시간 순으로 온다
  it("render MessageItem", () => {
    render(<MessageItem data={TEST_MESSAGE} />);

    screen.getByText(TEST_MESSAGE.content);
    screen.getByText(TEST_MESSAGE.userName);
    screen.getByText(TEST_MESSAGE.date);
  });

  it("render MessageItem of the user", () => {
    // message author is the user (mine);
    render(<MessageItem data={TEST_MESSAGE_2} />);

    screen.getByText(TEST_MESSAGE_2.content);
    screen.getByText("*" + TEST_MESSAGE_2.userName);
    screen.getByText(TEST_MESSAGE_2.date);
  });
});
