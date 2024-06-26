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
        max-height: 3rem;
    }

    @media only screen and (max-width: 767px) {
        input {
            width: 50%;
        }

        .row {
            justify-content: center;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        input {
            width: 50%;
        }

        .row {
            justify-content: center;
        }
    }

    // Extra large + TV screen 2K + 4K
    @media only screen and (min-width: 1921px) {
        input {
            height: 3rem;
            width: 13%;
        }

        h2 {
            font-size: 3rem;
        }

        .filter {
            height: 5rem;
        }
    }
`;

export default Wrapped;
