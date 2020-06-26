import tw from 'twin.macro';
import styled from 'styled-components/macro';

export const div = tw.div`py-64 bg-black text-white`;

export const styledcomponent = styled.div`
    ${tw`py-8`}
    background-color: teal;
    ul {
        li {
            color: red;
        }
    }
`;
