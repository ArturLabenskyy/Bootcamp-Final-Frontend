import styled from "styled-components";

const Wrapped = styled.div`
    .post {
        width: 80%;
        overflow: scroll;
        overflow-x: hidden;
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
        margin-right: 2rem;
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
`;

export default Wrapped;
