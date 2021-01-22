import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

interface IAtom  {
    children: React.ReactNode;
    [propName: string]: any;
}

const AtomComponent = styled(View)`
    color: ${({ theme }) => theme.primaryColor};
`
const Atom: React.FC<IAtom> = ({children, ...props}) => {
    return(
        <AtomComponent {...props}>
            {children}
        </AtomComponent>
    )
}

export default Atom