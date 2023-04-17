import styled from "styled-components";

const Wrapped = styled.div`
    height: 15%;
    background: #0e1827;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 7rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .logo:hover {
        cursor: pointer;
    }

    h1 {
        color: #d4d5d8;
        font-size: 3rem;
    }

    .app-name:hover {
        cursor: pointer;
        color: var(--secondary-text-color);
    }

    .right-login {
        height: 100%;
        width: 30rem;
        margin: auto 2rem;
        justify-content: space-around;
        align-items: center;
    }

    .nav-link {
        height: 50%;
        margin: auto 1rem;
        background: none;
        border: none;
        width: 8rem;
        font-size: 2rem;
        color: var(--main-text-color);
    }

    .nav-link:hover {
        color: var(--secondary-text-color);
    }

    .sign-up {
        height: 50%;
        width: 20rem;
        text-align: center;
        font-size: 2rem;
        border-radius: 1rem;
        border: none;
        color: var(--main-text-color);
        background-color: var(--secondary-background-color);
    }

    .sign-up:hover {
        background-color: var(--secondary-hover-color);
        color: var(--secondary-text-color);
    }
`;

export default Wrapped;
