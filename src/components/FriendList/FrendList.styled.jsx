import styled from 'styled-components'

export const Wrapper = styled.ul`
    width: 300px;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    height: 70px;
    background-color: rgb(200, 240, 243);
    border: 1px solid black;
    :not(:last-child){
        margin-bottom: 10px;
    }
    box-shadow: 4px 8px 15px 2px #29A3C4;
`;
export const Status = styled.span`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.status ? "green" : "red"};
    border-radius: 50%;
    margin-left: 20px;
`;
export const Avatar = styled.img`
display: block;
width: 60px;
height: 60px;
margin-left: 20px;
`;

export const Name =styled.p`
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font-size: 30px;
`