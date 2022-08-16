const nothing = () => { };
// eslint-disable-next-line
export default (inProduction = nothing, inDevelopment = nothing) =>
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === 'test'
    ? inProduction()
    : inDevelopment();
