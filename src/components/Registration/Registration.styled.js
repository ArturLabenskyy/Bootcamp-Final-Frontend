import styled from "styled-components";

const Wrapped = styled.div`
    height: 70%;
    color: var(--main-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;

    .register-form {
        width: 30%;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        background-color: #0e1848;
        border-radius: 1.3rem;
        font-weight: 600;
    }

    label {
        font-size: 2.2rem;
        margin-bottom: 0.5rem;
    }

    input {
        font-size: 2.2rem;
        margin-bottom: 0.8rem;
    }

    .finish {
        height: 5rem;
        width: 10rem;
        margin-top: 0.5rem;
        font-size: 2.3rem;
        font-weight: 600;
        border: none;
        border-radius: 1rem;
        background-color: var(--secondary-background-color);
        color: var(--main-text-color);
    }

    .finish:hover {
        color: var(--secondary-text-color);
        background-color: var(--secondary-hover-color);
    }
`;

export default Wrapped;
