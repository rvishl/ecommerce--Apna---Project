
import { css } from "styled-components";

const phoneView = (props) => {
    return css`
        @media only screen and (max-width: 395px) {
            ${props}
        }
    
    `
}

export default phoneView;