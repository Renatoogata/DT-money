import { HeaderContent, HeeaderContainer, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
    return(
        <HeeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeeaderContainer>
    )
}