import { APP_ENV_PRODUCTION } from './enums';

const nothing = () => { };
// eslint-disable-next-line
export default (inProduction = nothing, inDevelopment = nothing) =>
  process.env.NODE_ENV === APP_ENV_PRODUCTION || process.env.NODE_ENV === 'test'
    ? inProduction()
    : inDevelopment();
