import { Link } from "gatsby";
import React,{useState} from "react";
import styled from "styled-components";
import ClientOrderDetail from "../../../pages/clientPages/ClientOrderDetail";

const SingleOrder = ({ data }) => {
  const { budget, due_time, id, pages, subject, price, topic, created_at,acceptance_status } =
    data;
  const date = `${new Date(created_at).getDate()}/${new Date(
    created_at
  ).getMonth()}/${new Date(created_at).getFullYear()}`;

  const [orderIdSet, setOrderId] = useState(false)
  const showDetail = (event) =>{
    event.preventDefault();
    setOrderId(true);
  }
  let status = acceptance_status;
 if(!orderIdSet){
  return (
    <Container>
      <Property>
        <PropertyImg src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <PropertyText>
          <PropertyStreet>
            <OrderButton onClick={event=>showDetail(event)}>
              {id}
            </OrderButton>
          </PropertyStreet>
          <Subtitle>{/* {firstName} {lastName} */}</Subtitle>
        </PropertyText>
      </Property>

      <Topic>{topic.substring(0, 20)}</Topic>
      <UserWrapper>
        <Text style={{paddingLeft:"1rem"}}>{pages}</Text>
        <Subtitle>Pages or word</Subtitle>
      </UserWrapper>
      <UserWrapper>
        <Text>$ {price}</Text>
        <Subtitle>Budget {budget}</Subtitle>
      </UserWrapper>
      <UserWrapper>
        <Text>{due_time}</Text>
        <Subtitle>From: {date}</Subtitle>
      </UserWrapper>
      <UserWrapper>
      <Status>
                {(() => {
                    switch (status) {
                        case 101: return <><Text>Rejected</Text> <StatusIndicator color="#F17E7E"/></>;
                        case 202: return <><Text>Inprogress</Text> <StatusIndicator color="#FFD056"/></>;
                        case 303: return <><Text>Accepted</Text> <StatusIndicator color="#75C282"/></>;
                        default: return <><Text>Unconfirmed</Text><StatusIndicator color="#AAA5A5"/></>;
                    }
                })()}
            </Status>
      </UserWrapper>
    </Container>
  )}else{
  return(<ClientOrderDetail orderId={id}/>);
  }
};

export default SingleOrder;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  transition: all ease-in-out 300ms;
  &:hover {
    /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
    background-color: ${({ theme }) => theme.secondary};
  }
`;
const Text = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;

const Subtitle = styled(Text)`
  font-size: 0.6rem;
  color: #b2bfe1;
  margin-top: 2px;
`;

const Property = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PropertyImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
const PropertyStreet = styled(Text)`
  font-size: 1rem;
`;
const Subject = styled(Text)`
  width: 15%;
`;
const Topic = styled(Text)`
  width: 10%;
`;
const UserWrapper = styled.div`
  width: 15%;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
`;
const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-left: 1rem;
  position: absolute;
  right: 7rem;
`;
const OrderButton = styled.button`
  width: 10rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  color: #6b6b6b;
  border-radius: 5rem;
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
  &:hover {
    box-shadow: 0px 0px 10px rgba(128, 74, 216, 0.6);
  }
`;
