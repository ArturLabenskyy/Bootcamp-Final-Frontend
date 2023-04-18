import styled from "styled-components";

const Wrapped = styled.div`
    width: 100%;
    margin: 1.2rem 0rem;
    border-left: var(--secondary-text-color) dotted 1px;

    .author-date {
        margin: 1rem 1.3rem;
        padding: 0.7rem;
        justify-content: space-between;
        border-bottom: 0.5px solid var(--secondary-background-color);
    }

    .comment-date {
        margin-right: 1.2rem;
    }

    .comment-content {
        margin: 1rem;
        margin-left: 3rem;
        color: var(--secondary-text-color);
    }

    @media only screen and (max-width: 767px) {
        .author-date {
            margin: 1rem 1.3rem;
            padding: 0.7rem;
            justify-content: space-between;
            border-bottom: 0.5px solid var(--secondary-background-color);
        }

        .comment-date {
            margin-right: 1.2rem;
        }

        .comment-content {
            margin: 1rem;
            margin-left: 3rem;
            font-size: 1.5rem;
            color: var(--secondary-text-color);
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .author-date {
            margin: 1rem 1.3rem;
            padding: 0.7rem;
            justify-content: space-between;
            border-bottom: 0.5px solid var(--secondary-background-color);
        }

        .comment-date {
            margin-right: 1.2rem;
        }

        .comment-content {
            margin: 1rem;
            margin-left: 3rem;
            font-size: 1.5rem;
            color: var(--secondary-text-color);
        }
    }
    }
`;

export default Wrapped;
