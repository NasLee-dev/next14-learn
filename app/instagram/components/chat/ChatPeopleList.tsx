"use client";
import { selectedIndexState } from "utils/recoil/atoms";
import Person from "./Person";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "actions/chatActions";

export default function ChatPeopleList({ loggedInUser }) {
  const [selectedUserId, setSelectedUserId] =
    useRecoilState(selectedIndexState);
  const getAllUsersQuery = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const allUser = await getAllUsers();
      console.log(allUser);
      return allUser.filter((user) => user?.id !== loggedInUser.id);
    },
  });

  return (
    <div className="h-screen w-60 flex flex-col bg-gray-50">
      {getAllUsersQuery.isLoading && <div>Loading...</div>}
      {getAllUsersQuery.data?.map((user, index) => (
        <Person
          key={0}
          onClick={() => setSelectedUserId(user.id)}
          index={index}
          userId={user.id}
          name={user.email.split("@")[0]}
          onlineAt={user.last_sign_in_at}
          isActive={selectedUserId === 0}
          onChatScreen={false}
        />
      ))}
      {/* <Person
        onClick={() => setSelectedIndex(0)}
        index={0}
        userId="wootaik"
        name="John Doe"
        onlineAt={new Date().toISOString()}
        isActive={selectedIndex === 0}
        onChatScreen={false}
      />
      <Person
        onClick={() => setSelectedIndex(1)}
        index={1}
        userId="woo"
        name="woo Doe"
        onlineAt={new Date().toISOString()}
        isActive={selectedIndex === 1}
        onChatScreen={false}
      /> */}
    </div>
  );
}
