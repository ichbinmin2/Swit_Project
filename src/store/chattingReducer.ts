import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// default 값은... 3명이 5건의 메세지
// 대화 목록 => Array<Message>
// Message ? => 보낸 사람, 날짜, 내용
type Message = {
  id: string;
  userId: string;
  userName: string;
  profileImage: string; // 이미지 주소
  content: string;
  date: string; // yyyy-mm-dd hh:MM:ss
};

// 과거형
// sent 보내짐
// deleted 삭제됨

const chattingSlice = createSlice({
  name: "chatting",
  initialState: { value: [] as Message[] },
  reducers: {
    sent: (state, action: PayloadAction<Message>) => {
      state.value = [...state.value, action.payload];
      // return { value: [...state.value, action.payload] }
    },
    deleted: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((msg) => msg.id !== action.payload); // immer 버전
      // return { value: state.value.filter((msg) => msg.id !== action.payload) } // 불변성 버전
    },
  },
});

export const { sent, deleted } = chattingSlice.actions;
export default chattingSlice.reducer;
