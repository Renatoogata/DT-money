import styled from "styled-components";


export const HeeaderContainer = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px; //se a tela for maior que 1120 ele limita
    margin: 0 auto; // para centralizar
    padding: 0 1.5rem; // para caso a tela do usuario for menor do que 1120px ele vai dar um padding pro conteudo nao ficar grudado na borda

    display: flex;

    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
    }
`