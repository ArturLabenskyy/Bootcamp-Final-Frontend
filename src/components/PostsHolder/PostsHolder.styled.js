import styled from "styled-components";

const Wrapped = styled.div`
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .posts-holder {
        width: 80%;
        height: 80%;
        position: relative;
        border: none;
        overflow: scroll;
        overflow-x: hidden;
    }

    .posts-info {
        margin-bottom: 1rem;
        height: 10%;
        display: ${(props) => (props.show ? "none" : "flex")};
        border-bottom: 1px var(--secondary-background-color) solid;
    }

    .posts {
        display: ${(props) => (props.show ? "none" : "flex")};
    }

    .title-author {
        width: 50%;
        font-size: 2rem;
    }

    .last-message {
        width: 30%;
        font-size: 2rem;
    }

    .comments {
        margin-right: 3rem;
        width: 10%;
        font-size: 2rem;
    }

    .actions {
        width: 10%;
        margin-right: 1rem;
        font-size: 2rem;
    }

    .category-info {
        height: 10rem;
        width: 80%;
        justify-content: space-between;
        align-items: center;
    }

    .category-logo {
        margin-left: 2rem;
        height: 7rem;
        width: 12rem;
        border-radius: 2rem;
    }

    .add-post {
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

    .add-post:hover {
        color: var(--main-background-color);
        background-color: var(--secondary-text-color);
    }

    @media only screen and (max-width: 767px) {
        width: 100%;
        padding: 2rem;
        .container {
            width: 100%;
            height: auto;
        }

        .posts-info {
            height: 5rem;
        }

        .posts-holder {
            width: 100%;
            height: 50%;
        }

        .title-author {
            width: 40%;
            font-size: 1.5rem;
        }

        .last-message {
            width: 20%;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .comments {
            margin: auto;
            width: 20%;
            font-size: 1.5rem;
        }

        .actions {
            width: 20%;
            margin: auto;
            font-size: 1.5rem;
        }

        .category-logo {
            margin-left: 1rem;
            height: 5rem;
            width: 9rem;
            border-radius: 1rem;
        }

        .add-post {
            height: 5rem;
            width: 9rem;
            font-size: 1.5rem;
            margin-right: 1rem;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        padding: 2rem;
        .container {
            width: 100%;
            height: auto;
        }

        .posts-info {
            height: 5rem;
        }

        .posts-holder {
            width: 100%;
            height: 50%;
        }

        .title-author {
            width: 40%;
            font-size: 1.5rem;
        }

        .last-message {
            width: 20%;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .comments {
            margin: auto;
            width: 20%;
            font-size: 1.5rem;
        }

        .actions {
            width: 20%;
            margin: auto;
            font-size: 1.5rem;
        }

        .category-logo {
            margin-left: 1rem;
            height: 5rem;
            width: 9rem;
            border-radius: 1rem;
        }

        .add-post {
            height: 5rem;
            width: 9rem;
            font-size: 1.5rem;
            margin-right: 1rem;
        }
    }
`;

export default Wrapped;
