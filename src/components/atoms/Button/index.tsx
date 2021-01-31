import * as React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import { switchProp, palette } from "styled-tools";

interface IButton extends TouchableOpacity {
    color: string;
    title: string;
    accessibilityLabel: string;
    onPress: () => void;
    [propName: string]: any;
}

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
    color: 'primary' as 'primary' | 'secundary',
};

const Button: React.FC<IButton & DefaultProps> = ({
        color,
        title,
        accessibilityLabel,
        onPress,
        ...props
    }) => {

    const ButtonComponent = styled(TouchableOpacity)`
        border: 1px solid ${({ theme }) => theme.backgroundColor};
        background: ${switchProp("color", {
            primary:"#ff0000",
            secundary:"#ff0000"
        })};
    `;

    return(
        <ButtonComponent
            onPress={onPress}
            accessibilityLabel={accessibilityLabel}
            {...props}
        >
            <Text>{title}</Text>
        </ButtonComponent>
    )
}

export default Button