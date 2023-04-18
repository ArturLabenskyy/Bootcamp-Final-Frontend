import styled from "styled-components";

const Wrapped = styled.div`
    .title {
        width: 70%;
        text-align: center;
        font-size: 2.6rem;
        font-weight: 800;
        margin-bottom: 2rem;

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

    .about {
        flex-direction: column;
    }

    .step-one {
        margin-bottom: 3rem;
        font-size: 4rem;
        color: var(--secondary-text-color);
    }

    @media only screen and (max-width: 767px) {
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
    }
`;

export default Wrapped;
