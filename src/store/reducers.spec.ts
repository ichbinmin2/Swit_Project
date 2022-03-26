import { TEST_MESSAGE, TEST_MESSAGE_2 } from "../fixture";
import chattingReducer, { sent, deleted } from "./chattingReducer";

describe("chatting reducer", () => {
  it("sent", () => {
    const result = chattingReducer({ value: [] }, sent(TEST_MESSAGE));
    expect(result).toStrictEqual({ value: [TEST_MESSAGE] });
  });

  it("sent when content is empty", () => {
    const result = chattingReducer(
      { value: [] },
      sent({ ...TEST_MESSAGE, content: "" })
    );
    expect(result).toStrictEqual({ value: [] });
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
