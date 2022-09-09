import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 300px ;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ProfileInfo = styled.div`
    text-align: center;
    background-color: #f2f5ea;
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 50%;
`;

export const UserName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`;
export const UserInfo = styled.p`
    margin: 0;
    :not(:last-child){
        margin-bottom: 5px;

    }
`;

export const UserLocation = styled.p`
  margin: 0;

`;

export const Container = styled.ul`
display: flex;
justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #bef5d5;
    border: 1px solid #54a4b3 ;
    padding: 10px 0;
`;

export const Lable = styled.span`
  color: #d60505;
  margin: 0;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
font-weight: bold;
  margin: 0;
`;