import { createGlobalStyle } from 'styled-components';
import { media } from 'js/constants/media';


const GlobalStyles = createGlobalStyle`
  .hidden-xs {
    ${media.xs} {
      display: none !important;
    }
  }

  .hidden-sm {
    ${media.sm} {
      display: none !important;
    }
  }

  .hidden-smPlus {
    ${media.smPlus} {
      display: none !important;
    }
  }

  .hidden-smMinus {
    ${media.smMinus} {
      display: none !important;
    }
  }
  
  .hidden-md {
    ${media.md} {
      display: none !important;
    }
  }

  .hidden-lg {
    ${media.lg} {
      display: none !important;
    }
  }

  th {
    vertical-align: middle !important;
  }

  td {
    vertical-align: middle !important;
  }
`;

export default GlobalStyles;
