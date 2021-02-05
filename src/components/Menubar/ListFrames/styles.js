import styled from 'styled-components';

export const ListStatus = styled.dl`
    margin-top: 6px;
    font-family: "Oxygen", sans-serif;
    transition-delay: -150ms;
    transition: all 0.5s ease 0s;
    dd {
        margin-bottom: 12px;
        width: 100%;
        border-radius:8px;
        cursor:pointer;
        display: flex;
        align-items: center;
        padding: 0 12px;

        :hover {
            .listTotal {
                background: #fff;
            }
            .listName {
                color: #fff;
            }
        }
    }

    .selected {
        display: ${props => props.expansion ? 'flex' : 'none'};
        background-color: #fff;
        width: 100%;
        border-radius:8px;
        font-weight: bold;
        cursor:pointer;
        align-items: center;
        padding: 6px 12px;

        .listTotal {
            color: ${({theme}) => theme.palette.white};
            background: ${({theme}) => theme.palette.primary};
        }

        .listName {
            color: ${({theme}) => theme.palette.gray};
        }

        :hover {
            .listTotal {
                color: ${({theme}) => theme.palette.white};
                background: ${({theme}) => theme.palette.primary};
            }
            .listName {
                color: ${({theme}) => theme.palette.gray};
            }
        }
    }
`;

export const ListTotal = styled.span`
    width: 20px;
    height: 20px;
    background: #D0E1FB;
    color: ${({theme}) => theme.palette.primary};
    align-items: center;
    border-radius:8px;
    font-weight: bold;
    font-size: 14px !important;
    justify-content: center;
    cursor:pointer;
    margin-right: 12px;
`;

export const ListName = styled.span`
    display: inline;
    width: 164px;
    cursor:pointer;
    color: #D0E1FB;
    font-size: 14px !important; 
`;
