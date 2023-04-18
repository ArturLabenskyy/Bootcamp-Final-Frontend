import styled from "styled-components";

const Wrapped = styled.div`
    width: 70%;
    height: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;

    .post {
        width: 80%;
    }

    .header-box {
        border: 2px var(--secondary-text-color) solid;
        border-radius: 2rem;
    }

    .post-header {
        height: 5rem;
        justify-content: space-between;
        margin: 2rem;
        border-bottom: 1px solid var(--secondary-background-color);
    }

    .author {
        margin-left: 1.2rem;
    }

    .publish-date {
        margin-right: 1.2rem;
    }

    .post-header {
        justify-self: center;
        align-self: center;
    }

    .post-content {
        margin: 1.5rem 0;
        font-size: 3rem;
    }

    .post-content {
        margin: 1rem;
        margin-left: 3rem;
    }

    .title {
        font-size: 3rem;
        text-shadow: 1px 1px 0 var(--secondary-background-color),
            -1px -1px 0 var(--secondary-background-color),
            1px -1px 0 var(--secondary-background-color),
            -1px 1px 0 var(--secondary-background-color);
    }

    .post-info {
        height: 10rem;
        width: 100%;
        justify-self: center;
        align-self: center;
        justify-content: space-between;
        align-items: center;
    }

    .post-logo {
        margin-left: 2rem;
        height: 7rem;
        width: 12rem;
        border-radius: 2rem;
    }

    .answer {
        height: 5rem;
        width: 9rem;
        font-size: 2rem;
        margin: 2rem;
        justify-self: center;

        color: var(--main-text-color);
        background-color: var(--secondary-background-color);
        border: none;
        border-radius: 1rem;
    }

    .answer:hover {
        color: var(--main-background-color);
        background-color: var(--secondary-text-color);
    }

    .comments {
    }

    @media only screen and (max-width: 767px) {
        width: 100%;
        .post {
            width: 90%;
        }

        .header-box {
            border: 2px var(--secondary-text-color) solid;
            border-radius: 2rem;
        }

        .post-header {
            height: 5rem;
            justify-content: space-between;
            margin: 2rem;
            border-bottom: 1px solid var(--secondary-background-color);
        }

        .author {
            width: 20%;
            margin-left: 1.2rem;
            font-size: 1.7rem;
        }

        .publish-date {
            margin-right: 1.2rem;
            font-size: 1rem;
            width: 20%;
        }

        .post-header {
            justify-self: center;
            align-self: center;
        }

        .post-content {
            margin: 1rem;
            margin-left: 3rem;
            font-size: 3rem;
            color: var(--secondary-text-color);
        }

        .title {
            font-size: 3rem;
            text-shadow: 1px 1px 0 var(--secondary-background-color),
                -1px -1px 0 var(--secondary-background-color),
                1px -1px 0 var(--secondary-background-color),
                -1px 1px 0 var(--secondary-background-color);
        }

        .post-info {
            height: 10rem;
            width: 100%;
            justify-self: center;
            align-self: center;
            justify-content: space-between;
            align-items: center;
        }

        .post-logo {
            margin-left: 2rem;
            height: 7rem;
            width: 12rem;
            border-radius: 2rem;
        }

        .answer {
            height: 5rem;
            width: 9rem;
            font-size: 2rem;
            margin: 2rem;
            justify-self: center;

            color: var(--main-text-color);
            background-color: var(--secondary-background-color);
            border: none;
            border-radius: 1rem;
        }

        .answer:hover {
            color: var(--main-background-color);
            background-color: var(--secondary-text-color);
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        .post {
            width: 90%;
        }

        .header-box {
            border: 2px var(--secondary-text-color) solid;
            border-radius: 2rem;
        }

        .post-header {
            height: 5rem;
            justify-content: space-between;
            margin: 2rem;
            border-bottom: 1px solid var(--secondary-background-color);
        }

        .author {
            width: 20%;
            margin-left: 1.2rem;
            font-size: 1.7rem;
        }

        .publish-date {
            margin-right: 1.2rem;
            font-size: 1rem;
            width: 20%;
        }

        .post-header {
            justify-self: center;
            align-self: center;
        }

        .post-content {
            margin: 1rem;
            margin-left: 3rem;
            font-size: 3.3rem;
            color: var(--secondary-text-color);
        }

        .title {
            font-size: 3rem;
            text-shadow: 1px 1px 0 var(--secondary-background-color),
                -1px -1px 0 var(--secondary-background-color),
                1px -1px 0 var(--secondary-background-color),
                -1px 1px 0 var(--secondary-background-color);
        }

        .post-info {
            height: 10rem;
            width: 100%;
            justify-self: center;
            align-self: center;
            justify-content: space-between;
            align-items: center;
        }

        .post-logo {
            margin-left: 2rem;
            height: 7rem;
            width: 12rem;
            border-radius: 2rem;
        }

        .answer {
            height: 5rem;
            width: 9rem;
            font-size: 2rem;
            margin: 2rem;
            justify-self: center;

            color: var(--main-text-color);
            background-color: var(--secondary-background-color);
            border: none;
            border-radius: 1rem;
        }

        .answer:hover {
            color: var(--main-background-color);
            background-color: var(--secondary-text-color);
        }
    }
`;

export default Wrapped;
