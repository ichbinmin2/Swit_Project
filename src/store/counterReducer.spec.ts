import counterReducer, { incremented, decremented } from "./counterReducer";

describe("counterReducer", () => {
  it("incremented", () => {
    // state action => new state

    const result = counterReducer({ value: 0 }, incremented());
    expect(result).toStrictEqual({ value: 1 });
  });
  it("decremented", () => {
    const result = counterReducer({ value: 0 }, decremented());
    expect(result).toStrictEqual({ value: -1 });
  });
});

// yarn jest
