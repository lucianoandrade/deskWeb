import styled from 'styled-components';

export const DashboardCardLoading = styled.div`
    background-color: #f9f9f9;
    padding: 0 0 1rem;
    margin-bottom: 30px;
    border: 0;
    margin-right: 14px;
    border-radius: 0;
    /* border-top: 2px solid #4393eb63; */
    width: 40%;
    transition: 500ms all;
    box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
    color: inherit;
    &:hover {
        /* border-color: ${({ theme }) => theme.palette.primary}; */
    }

    @media (max-width: 1165px) {
        width: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 17px;

        .info {
            font-size: .6em;
            color: #2393eb;
        }

        .title {
            font-size: 1.1em;
            font-weight: bold;
        }

        .service-orders-total {
            margin-left: 10px;

            span {
                font-size: 0.8em;
                background: #f4f4f6;
                padding: 4px;
                border-radius: 5px;
            }
        }
    }

    .items {
        display: flex;

        .loading {
            :nth-child(1) {
                margin-right: 10px;
            }

            :nth-last-child() {
                margin-left: 10px;
            }
        }
    }
`;