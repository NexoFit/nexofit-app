import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        secondaryColor: string;
        backgroundColor: string;
        textColor: string;
    }
}

const lightTheme: DefaultTheme = {
    primaryColor: "#f45511",
    secondaryColor: '#251069',
    backgroundColor: "#fff",
    textColor: "#256913",
};

const darkTheme: DefaultTheme = {
    primaryColor: "#f45511",
    secondaryColor: '#251069',
    backgroundColor: "#fff",
    textColor: "#256913",
};

export const theme = lightTheme