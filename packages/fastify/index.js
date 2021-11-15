import { hello, world } from 'auto-publish-workspaces-lib';

export const helloWorld = () => {
    return `${hello()} ${world()}`;
};
