import ChatPeopleList from "../components/chat/ChatPeopleList";
import ChatScreen from "../components/chat/ChatScreen";

export default function ChatPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ChatPeopleList />
      <ChatScreen />
    </div>
  );
}