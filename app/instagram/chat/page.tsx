import Person from "../components/chat/Person";

export default function ChatPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Person 
        index={0} 
        userId="wootaik" 
        name="John Doe" 
        onlineAt={new Date().toISOString()} 
        isActive={true}
        onChatScreen={false}
      />
    </div>
  );
}