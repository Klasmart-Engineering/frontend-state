export interface ConfigParameters {
    cookieDomain: string;
}

export class Config {
    constructor(params: ConfigParameters) {
        this._cookieDomain = params.cookieDomain;
    }

    private _cookieDomain: string;

    get cookieDomain () {
        return this._cookieDomain
    };
}

let config: Config;

export const getConfig = () => config;
export const setConfig = (newConfig: Config) => config = newConfig;