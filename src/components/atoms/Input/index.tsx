import * as React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

interface IInput extends TextInput {
    text: string;
    [propName: string]: any;
}

const InputComponent = styled(TextInput)`
    color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.secondaryColor};
`
const Input: React.FC<IInput> = ({...props}) => {
    const [value, setValue] = React.useState<string>();

    return(
        <InputComponent
            onChangeText={text => setValue(text)}
            value={value}
        {...props} />
    )
}

export default Input