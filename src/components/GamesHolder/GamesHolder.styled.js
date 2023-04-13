import styled from "styled-components";

const Wrapped = styled.div`
    width: 70%;
    height: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    /* flex-wrap: wrap; */
    overflow: scroll;
    overflow-x: hidden;
    /* border: 3px white solid; */

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
