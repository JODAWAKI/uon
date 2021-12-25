import React from "react";
import styled from "styled-components";
import ChatBody from "./chatPartials/ChatBody";

const ChatBox = () => {
  return (
    <Container>
      <TopChatBar><h1>Chat Box</h1></TopChatBar>
      <ChatBody />
    </Container>
  );
};

export default ChatBox;

const Container = styled.div`
  margin-top: 3vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: auto;
  background: white;
  display: block;
`;

const TopChatBar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: green;
  border-radius: 5px 5px 0px 0px;
  justify-content: center;
  h1{
    padding-top: 1rem;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(1rem,1vw, 1rem);
    font-weight: 300;
  }
`;