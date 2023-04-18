import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;

    .comments-number {
        width: 10%;
        text-align: center;
    }

    .title-and-author {
        width: 50%;
        margin-bottom: 1rem;
    }

    .message-date {
        font-size: 1.2rem;
    }

    .title {
        color: var(--secondary-background-color);
        font-size: 2.6rem;
    }

    .title:hover {
        cursor: pointer;
        color: var(--secondary-text-color);
    }

    .author {
        font-size: 1.3rem;
    }



    .last-message {
        width: 30%;
        font-size: 1rem;
    }

    .editing {
        width: 10%;
    }

    .delete-button {
        margin-right: 1rem;
        align-self: center;
        justify-self: center;
        height: 2rem;
        width: 5rem;
        color: var(--main-text-color);
        background-color: var(--secondary-background-color);
        border: none;
        border-radius: 1rem;
    }

    .delete-button:hover {
        color: var(--main-background-color);
        background-color: var(--secondary-text-color);
    }

    @media only screen and (max-width: 767px) {
        .comments-number {
            width: 20%;
            text-align: center;
        }

        .title-and-author {
            width: 40%;
            margin-bottom: 1rem;
        }

        .message-date {
            font-size: 1.2rem;
        }

        .title {
            color: var(--secondary-background-color);
            font-size: 2.6rem;
        }

        .title:hover {
            cursor: pointer;
            color: var(--secondary-text-color);
        }

        .author {
            font-size: 1.3rem;
        }

        .delete-button {
            height: 5rem;
            width: 8rem;
        }

        .last-message {
            width: 20%;
            font-size: 1rem;
        }

        .editing {
            width: 20%;
        }

        .delete-button {
            height: 3rem;
            width: 8rem;
            color: var(--main-text-color);
            background-color: var(--secondary-background-color);
            border: none;
            border-radius: 1rem;
        }

        .delete-button:hover {
            color: var(--main-background-color);
            background-color: var(--secondary-text-color);
        }

        .comments-num {
            margin: auto;
        }

        .message-date {
            font-size: 1.3rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .comments-number {
            width: 20%;
            text-align: center;
        }

        .title-and-author {
            width: 40%;
            margin-bottom: 1rem;
        }

        .message-date {
            font-size: 1.2rem;
        }

        .title {
            color: var(--secondary-background-color);
            font-size: 2.6rem;
        }

        .title:hover {
            cursor: pointer;
            color: var(--secondary-text-color);
        }

        .author {
            font-size: 1.3rem;
        }

        .delete-button {
            height: 5rem;
            width: 8rem;
        }

        .last-message {
            width: 20%;
            font-size: 1rem;
        }

        .editing {
            width: 20%;
        }

        .delete-button {
            height: 3rem;
            width: 8rem;
            color: var(--main-text-color);
            background-color: var(--secondary-background-color);
            border: none;
            border-radius: 1rem;
        }

        .delete-button:hover {
            color: var(--main-background-color);
            background-color: var(--secondary-text-color);
        }

        .comments-num {
            margin: auto;
        }

        .message-date {
            font-size: 1.3rem;
        }
    }
    }
`;

export default Wrapped;
