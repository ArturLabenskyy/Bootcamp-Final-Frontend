import styled from "styled-components";

const Wrapped = styled.div`
    height: 15%;
    background: var(--main-background-color);
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

    /* Media queries */
    @media only screen and (max-width: 768px) {
        /* For tablets */
        .logo {
            width: 5rem;
        }
        h1 {
            font-size: 2.5rem;
        }
        .right-login {
            width: 20rem;
            margin: auto 1rem;
        }
        .nav-link {
            width: 6rem;
            font-size: 1.5rem;
        }
        .sign-up {
            width: 15rem;
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 480px) {
        /* For mobile phones */
        padding: 1rem;
        .logo {
            width: 3rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
        h1 {
            font-size: 2rem;
        }
        .right-login {
            width: 15rem;
            margin: auto 0.5rem;
        }
        .nav-link {
            width: 5rem;
            font-size: 1.5rem;
        }
        .sign-up {
            height: 4rem;
            width: 12rem;
            font-size: 1.2rem;
        }
    }
`;

export default Wrapped;
