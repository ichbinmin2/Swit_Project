import chattingReducer, { sent, deleted } from "./chattingReducer";

// fixture
const TEST_MESSAGE = {
  id: "test id 1",
  userId: "jamong",
  userName: "pingoo",
  profileImage: "https://image.jpeg", // 이미지 주소
  content: "test test test",
  date: "2022-03-14 19:28:29",
};

const TEST_MESSAGE_2 = {
  id: "test id 2",
  userId: "jamong",
  userName: "pingoo",
  profileImage: "https://image.jpeg", // 이미지 주소
  content: "test test 2222",
  date: "2022-03-14 19:30:29",
};

describe("chatting reducer", () => {
  it("sent", () => {
    const result = chattingReducer({ value: [] }, sent(TEST_MESSAGE));
    expect(result).toStrictEqual({ value: [TEST_MESSAGE] });
  });

  it("deleted", () => {
    const result = chattingReducer(
      { value: [TEST_MESSAGE, TEST_MESSAGE_2] },
      deleted(TEST_MESSAGE.id)
    );
    expect(result).toStrictEqual({ value: [TEST_MESSAGE_2] });
  });
});

// yarn jest
