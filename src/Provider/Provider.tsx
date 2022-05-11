
import React, {
    useEffect
} from "react"
import { RecoilRoot } from "recoil";
import LocaleProvider from "../LocaleProvider";
import {
    Config,
    setConfig
} from "../config";

interface StateProviderProps {
    cookieDomain: string;
}

const StateProvider: React.FC<StateProviderProps> = (props) => {
    useEffect(() => {
        const config = new Config({
            cookieDomain: props.cookieDomain
        });
        setConfig(config);
    }, [ props.cookieDomain ]);

    return (
        <RecoilRoot>
            <LocaleProvider>
                {props.children}
            </LocaleProvider>
        </RecoilRoot>
    );
};

export default StateProvider;
