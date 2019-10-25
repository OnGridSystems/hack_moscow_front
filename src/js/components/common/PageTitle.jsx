import styled from 'styled-components';

import { media } from 'js/constants/media';


const PageTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  line-height: 23px;
  margin-bottom: 30px;
  margin: 0 0 40px 0;
  text-align: center;
  border-bottom: 4px solid #d5dcef;
  padding-bottom: 20px;
  ${media.xs} {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #d5dcef;
  }
`;

export default PageTitle;
