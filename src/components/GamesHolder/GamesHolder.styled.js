import styled from "styled-components";

const Wrapped = styled.div`
    width: 70%;
    height: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;

    .row {
        flex-wrap: wrap;
    }

    .filter {
        margin: 1rem;
    }

    h2 {
        margin-right: 2rem;
    }

    input {
        max-height: 2rem;
    }
`;

export default Wrapped;
