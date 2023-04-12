import styled from "styled-components";

const Wrapped = styled.div`
    margin: auto;

    h1 {
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(145deg, #65acd5, #65acd5, #fff 66%);
        background-size: 200% auto;

        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: shine 3s linear infinite;
        @keyframes shine {
            to {
                background-position: 200% center;
            }
        }
    }
`;

export default Wrapped;
