import React from 'react'
import styled from 'styled-components'

const User = ({data}) => {
    const { firstName,lastName } = data;
  
    return (
        <Container>
           <Property>
                <PropertyImg src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <PropertyText>
                    <PropertyStreet><OrderLink href='adminPages/OrderDetail/1'>46199</OrderLink></PropertyStreet>
                    <Subtitle>{firstName} {lastName}</Subtitle>
                </PropertyText>
            </Property>
            <MoveInDate>Nursing</MoveInDate>
            <Rent>Discussion quest...</Rent>
            <UserWrapper>
                <Text>500 words</Text>
                <Subtitle>Bill type</Subtitle>
            </UserWrapper>
            <UserWrapper>
                <Text>3,500/=</Text>
                <Subtitle>Bill type</Subtitle>
            </UserWrapper>
            <UserWrapper>
                <Text>4 days</Text>
                <Subtitle>Bill type</Subtitle>
            </UserWrapper>
            {/* <Status>
                <Text>{status.message}</Text>
                {(() => {
                    switch (status.level) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status> */}
        </Container>
    )
}

export default User

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;
    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`
const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #B2BFE1;
    margin-top: 2px;
`

const Property = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const PropertyImg = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
`
const PropertyStreet = styled(Text)`
    font-size: 1rem;
`
const MoveInDate = styled(Text)`
    width: 15%;
`
const Rent = styled(Text)`
    width: 10%;
`
const UserWrapper = styled.div`
    width: 15%;
`
const Status = styled.div`
    display: flex;
    align-items: center;
`
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`
const OrderLink = styled.a`
  width: 10rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  color: #6B6B6B;
  border-radius: 5rem;
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  &:hover {
    box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
  }
`