'use client'
import Person from "./Person";
import Message from "./Message";
import { useRecoilValue } from "recoil";
import { selectedIndexState } from "utils/recoil/atoms";

export default function ChatScreen() {
  const selectedIndex = useRecoilValue(selectedIndexState);
  return (
    selectedIndex !== null ? (
      <div className="w-full h-screen flex flex-col">
        <Person 
          index={selectedIndex}
          userId="wootaik"
          name="John Doe"
          onlineAt={new Date().toISOString()}
          isActive={false}
          onChatScreen={true}
        />
        {/* 채팅 영역 */}
        <div className="w-full flex-1 flex flex-col bg-white p-4 gap-2">
          <Message isFromMe={true} message="안녕하세요" />
          <Message isFromMe={false} message="안녕하세요" />
          <Message isFromMe={true} message="안녕하세요" />
          <Message isFromMe={false} message="안녕하세요" />
        </div>
        {/* 채팅 입력 영역 */}
        <div className="flex">
          <input 
            className="w-full p-3 border-2 border-light-blue-500"
            placeholder="메시지를 입력하세요"
          />
          <button
            color="light-blue"
            className="min-w-20 p-3 bg-light-blue-500 text-white"
          >
            <span>
              전송
            </span>
          </button>
        </div>
      </div>
    ) : (
      <div className="w-full"></div>
    )
  )
}