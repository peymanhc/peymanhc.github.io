export const convertObjectToQueryString = (obj: any) => {
  const queryString = [];
  for (let prop in obj)
    if (obj.hasOwnProperty(prop))
      if (obj[prop] instanceof Array)
        obj[prop].forEach((value: any) =>
          queryString.push(
            encodeURIComponent(prop) + '=' + encodeURIComponent(value)
          )
        );
      else
        queryString.push(
          encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop])
        );
  return queryString.join('&');
};
