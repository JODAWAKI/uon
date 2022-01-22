import styled from "@emotion/styled";
import React from "react";

const TransactionMain = ({ data,title, count }) => {
    console.log(data)
  return (
    <Container>
      <Title>
        {title} <UserCount> {count}</UserCount>
      </Title>
     <table>
         <thead>
             <th>Head</th>
         </thead>
         <tbody>
             {data.map((info)=>{
             <tr>
                 <td>{info.amount}</td>
             </tr>
             })}
         </tbody>
     </table>
    </Container>
  );
};

export default TransactionMain;
const Container = styled.div`
background-color: #fcf9ff;
  box-shadow: 2px 14px 9px 2px rgba(0, 0, 0, 0.25);
  padding:1rem;
  border-radius: 5px;
`
const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

const UserCount = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: grey;
  color: white;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;