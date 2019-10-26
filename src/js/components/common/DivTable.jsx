import styled from 'styled-components';

import { media } from 'js/constants/media';


const DivTable = styled.div`
  display: table;
  & > div {
    display: table-row;
    & > div {
      display: table-cell;
    }
  }
  .TxnInfo_property {
    &:not(:last-of-type) > div {
      padding-bottom: 4px;
      ${media.xs} {
        padding-bottom: 2px;
      }
    }
  }
  .TxnInfo_label {
    font-weight: 600;
    line-height: 30px;
    white-space: nowrap;
    ${media.xs} {
      line-height: 18px;
      font-size: 12px;
    }
  }
  .TxnInfo_value {
    padding-left: 16px;
    line-height: 18px;
    ${media.md} {
      word-break: break-all;
    }
    ${media.xs} {
      font-size: 12px;
    }
  }
`;

export default DivTable;
