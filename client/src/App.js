import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Components/Chat";
import Room from "./Components/Room";

const socket = io.connect("http://localhost:3001");

function App() {
  const [showChat, setShowChat] = useState(false);
  const [roomData, setRoomData] = useState({
    name: "",
    room: "",
  });
  const joinRoom = () => {
    if (Object.values(roomData).every((x) => x != "")) {
      socket.emit("join_room", roomData.room);
      setShowChat(true);
    } else {
      console.log("enter name and room id");
    }
  };

  return (
    <div className="App">
      {showChat ? (
        <Chat room={roomData.room} username={roomData.name} socket={socket} />
      ) : (
        <Room
          setRoomData={setRoomData}
          roomData={roomData}
          joinRoom={joinRoom}
        />
      )}
    </div>
  );
}

export default App;
