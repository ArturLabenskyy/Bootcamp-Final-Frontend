import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    /* background-color: black; */
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    border: none;
    border-radius: 2rem;

    .input-style {
        margin: 2rem;
        padding: 0%.7rem;
        border: var(--secondary-background-color) 2px solid;
        border-radius: 1rem;
        background-color: var(--secondary-text-color);
        color: var(--main-background-color);
    }

    .input-style:focus {
        border: none;
        font-size: 2rem;
    }

    textarea {
        height: 30%;
        width: 70%;
    }

    input {
        height: 3rem;
    }

    button {
        height: 5rem;
        width: 9rem;
        font-size: 2rem;
        margin-right: 2rem;
        justify-self: center;

        color: var(--main-text-color);
        background-color: var(--secondary-background-color);
        border: none;
        border-radius: 1rem;
    }

    button:hover {
        color: var(--main-background-color);
        background-color: var(--secondary-text-color);
    }

    @media only screen and (max-width: 767px) {
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
    }
`;

export default Wrapped;
