import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';

export const Container = styled.div`
  header {
    margin-top: -30px;
    h1 {
      display: flex;
      margin-top: 8px;
      margin-bottom: 8px;
      align-items: center;
      cursor: pointer;

      strong {
        display: block;
        height: 25px;
        width: 508px;
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
        margin-left: 12px;
        color: ${({ theme }) => theme.palette.black};
      }
    }

    p {
      font-size: 1em;
      margin-top: 6px;
      color: #505050;
    }
  }
  .tableData {
    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;

      .tableTitle {
        height: 60px;
        max-width: 629px;
        font-family: 'Oxygen', sans-serif;
        font-weight: bold;
        font-size: 12px;
        line-height: 140%;
        color: ${({ theme }) => theme.palette.gray};
        border: none;
        td {
          padding: 0 16px;
          border-bottom: 1px solid #dbe5ed;
          span {
            display: flex;
            align-items: center;
            cursor: pointer;
          }
        }
        .InitDate {
          padding: 0 75px 0 93px;
        }
      }

      .tableInfo {
        height: 60px;
        max-width: 629px;
        font-family: 'OxygenLight', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #1f191a;
        border-top: 1px solid #dbe5ed;
        border-bottom: 1px solid #dbe5ed;

        td {
          padding: 0 16px;
        }

        .InitDate {
          padding: 0 75px 0 93px;
        }
      }

      .tableInfo:nth-child(odd) {
        background: #ffffff;
      }
      .tableInfo:nth-child(even) {
        background: #f8f8f8;
      }
    }
  }
`;

export const ArrowLeft = styled(HiArrowLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.palette.primary};
`;

export const Sort = styled(FaSort)`
  width: 8px;
  height: 32px;
  font-weight: 900;
  font-size: 10px;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #dbe5ed;
  margin-left: 8px;
  cursor: pointer;
`;
export const SortUp = styled(FaSortUp)`
  width: 8px;
  height: 32px;
  font-weight: 900;
  font-size: 10px;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #dbe5ed;
  margin-left: 8px;
  cursor: pointer;
`;
export const SortDown = styled(FaSortDown)`
  width: 8px;
  height: 32px;
  font-weight: 900;
  font-size: 10px;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #dbe5ed;
  margin-left: 8px;
  cursor: pointer;
`;
