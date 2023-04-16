import styled from "styled-components";

const Wrapped = styled.div`
    height: 100%;

    .posts-holder {
        width: 80%;
        height: 80%;
        border: 1px white solid;
        overflow: scroll;
        overflow-x: hidden;
    }

    .posts-info {
        height: 10%;
    }

    .title-author {
        width: 60%;
    }

    .last-message {
        width: 30%;
    }

    .comments {
        width: 10%;
    }
`;

export default Wrapped;
