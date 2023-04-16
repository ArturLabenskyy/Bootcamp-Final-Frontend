import styled from "styled-components";

const Wrapped = styled.div`
    margin: 1.2rem 3rem;
    border-left: var(--secondary-text-color) dotted 1px;
    /* border-top: var(--secondary-text-color) dotted 1px; */

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
    }
`;

export default Wrapped;
