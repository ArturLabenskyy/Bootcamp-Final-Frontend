import styled from "styled-components";

const Wrapped = styled.div`
    .game-card {
        width: 25rem;
        height: 25rem;
        margin: 1rem;
        border: 1.3px solid var(--secondary-background-color);
        border-radius: 3rem;
        overflow: scroll;
        padding-bottom: 0.7rem;
    }

    .game-card:hover {
        cursor: pointer;
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
        text-align: center;
    }
`;

export default Wrapped;
