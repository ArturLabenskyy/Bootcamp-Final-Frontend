import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    display: ${(props) => (props.show ? "block" : "none")};

    input {
        border-style: none;
        background: transparent;
        outline: none;
    }

    .webflow-style-input {
        height: 5rem;
        width: 70%;
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        border-radius: 1rem;
        background: var(--secondary-text-color);
    }

    .webflow-style-input input {
        margin: 1rem;
        flex-grow: 1;
        color: var(--main-background-color);
        font-size: 1.8rem;
        line-height: 2.4rem;
        vertical-align: middle;
    }

    .comment-button {
        height: 100%;
        width: 9rem;
        font-size: 1.8rem;
        text-align: center;
        border: none;
        border-radius: 1rem;
        background-color: var(--secondary-background-color);
        color: var(--main-text-color);
    }

    .comment-button:hover {
        background-color: #6cbae7;
        color: var(--main-background-color);
    }
`;

export default Wrapped;
