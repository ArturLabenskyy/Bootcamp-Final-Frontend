import styled from "styled-components";

const Wrapped = styled.div`
    .game-card {
        width: 25rem;
        height: 25rem;
        margin: 1rem;
        border-radius: 3rem;
        overflow: scroll;
        padding-bottom: 0.7rem;
    }

    .game-card:hover {
        cursor: pointer;
        background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    }

    .game-card::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    img {
        width: 100%;
        height: 60%;
        border-radius: 3rem;
    }

    .game-name {
        margin: 0.6rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.7rem;
        color: var(--secondary-text-color);
    }

    .description {
        margin: 0.7rem;
        font-weight: 500;
        text-align: center;
    }

    @media only screen and (max-width: 767px) {
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
    }
`;

export default Wrapped;
