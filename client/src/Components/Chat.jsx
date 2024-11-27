import React, { useEffect, useState } from "react";
import { FaBeer, FaChevronRight, FaEnvelope } from "react-icons/fa";

const Chat = ({ room, username, socket }) => {
  const [mssg, setmssg] = useState();
  const [mssgList, setmssgList] = useState([]);

  const sendMssg = async () => {
    const curentTime = new Date();
    const data = {
      username: username,
      time: `${curentTime.getUTCDate()} ${curentTime.getUTCDay()} ${curentTime.getUTCFullYear()}`,
      mssg: mssg,
      room: room,
    };
    await socket.emit("send_message", data);
    setmssgList((list) => [...list, data]);
    setmssg("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(mssgList);
      setmssgList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat_room">
      <div className="chat-head">
        <h2>Chat Box</h2>
      </div>
      <div className="chat-body">
        {mssgList.map((el) => {
          return (
            <div
              className={`message ${el.username == username ? "me" : "other"}`}
            >
              <p>{el.mssg}</p>
              <p>{el.time}</p>
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          name="message"
          placeholder="Hello !"
          onChange={(e) => setmssg(e.target.value)}
        />
        <FaChevronRight onClick={sendMssg} />
      </div>
    </div>
  );
};

export default Chat;
