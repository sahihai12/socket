import React from "react";

const Room = ({ setRoomData, roomData, joinRoom }) => {
  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };
  return (
    <div className="room_join">
      <div className="field">
        <label htmlFor="name">Enter Name</label>
        <input
          placeholder="Enter Name"
          onChange={handleChange}
          name="name"
          id="name"
        />
      </div>
      <div className="field">
        <label htmlFor="room">Enter Room ID</label>
        <input
          placeholder="Room ID"
          onChange={handleChange}
          name="room"
          id="room"
        />
      </div>
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default Room;
