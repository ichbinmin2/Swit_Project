import React from "react";
import { render, screen } from "@testing-library/react";
import ChattingForm from "./ChattingForm";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { sent } from "../store/chattingReducer";

// ChattingForm
describe("ChattingForm", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("값을 입력해야만 보내기 버튼을 눌러 채팅을 전송할 수 있다", async () => {
    // render
    const dispatch = jest.fn();
    render(<ChattingForm dispatch={dispatch} />);

    // 입력란 => 멀티라인 => textarea
    const chattingInput: HTMLInputElement = screen.getByRole("textbox");
    // 보내기 버튼
    const sendButton = screen.getByText("보내기");

    // 유저가 상호작용을 한다 (클릭, 타이핑, 탭, 스크롤..., 호버)
    // 비어 있으면... 입력하기 전에는 보내기 버튼이 비활성화
    expect(sendButton).toBeDisabled();

    // 메세지를 타이핑을 한다
    // 엔터 키를 누르면
    userEvent.type(chattingInput, "test chatting"); // {enter}
    const now = new Date("2021-03-14");
    jest.setSystemTime(now);
    userEvent.click(sendButton);

    // 잘 들어간다???
    // expect 이렇게 될 거야
    expect(dispatch).toHaveBeenCalledWith(
      sent({
        id: now.valueOf().toString(),
        userId: "jamong",
        userName: "pingoo",
        profileImage: "https://image.jpeg", // 이미지 주소
        content: "test chatting",
        date: now.toLocaleString(),
      })
    );

    expect(chattingInput.value).toBe("")
  });

  it("값을 입력해야만 보내기 버튼을 눌러 채팅을 전송할 수 있다", async () => {
    // render
    const dispatch = jest.fn();
    render(<ChattingForm dispatch={dispatch} />);

    // 입력란 => 멀티라인 => textarea
    const chattingInput: HTMLInputElement = screen.getByRole("textbox");

    // 메세지를 타이핑을 한다
    // 엔터 키를 누르면
    userEvent.type(chattingInput, "test chatting{enter}"); // 
    const now = new Date("2021-03-14");
    jest.setSystemTime(now);

    // 잘 들어간다???
    // expect 이렇게 될 거야
    expect(dispatch).toHaveBeenCalledWith(
      sent({
        id: now.valueOf().toString(),
        userId: "jamong",
        userName: "pingoo",
        profileImage: "https://image.jpeg", // 이미지 주소
        content: "test chatting",
        date: now.toLocaleString(),
      })
    );
  });
});


