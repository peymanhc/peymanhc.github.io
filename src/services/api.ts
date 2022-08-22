import { notification } from "antd";
import urls from "config/urls";
import qs from "qs";
import { read } from "storage";
import { convertObjectToQueryString } from "utils/convert-object";

export const getHeaders = () => {
  const token = read("token");
  return {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "X-Domain": "mediana.test",
    ...(token ? { Authorization: token } : {}),
  };
};

const request = async (url: string, options: any) => {
  let result: any;
  try {
    result = await fetch(url, {
      headers: getHeaders(),
      // withCredentials: 'same-origin',
      credentials: "same-origin",
      ...options,
    });
  } catch (e) {
    console.log(e);
  }
  if (result.status === 401) {
    const data = await result.json();
    notification.error({
      message: data.detail,
    });
    window.location.replace("/auth/logout");
  }
  if (result.status === 400) {
  } else {
    return await result.json();
  }
};

// @ts-ignore
export const post = ({ api, model, isSocial }: IApi) =>
  request(`${urls.endPointAdmin}${api}`, {
    method: "POST",
    body: JSON.stringify(model),
  });

// @ts-ignore
export const get = ({ api, model, url }: IApi) => {
  const test = qs.stringify(model);
  return request(
    `${url ? url : urls.endPointAdmin}${api}${test ? `&${test}` : ""}`,
    {
      method: "GET",
    }
  );
};

// @ts-ignore
export const deleted = ({ api, model, isSocial }: IApi) =>
  request(`${urls.endPointAdmin}${api}`, {
    method: "DELETE",
    body: JSON.stringify(model),
  });

// @ts-ignorez
export const remove = ({ api, id, isSocial }: IApi) =>
  request(`${urls.endPointAdmin}${api}`, {
    method: "DELETE",
  });
// @ts-ignore
// FIXME: need determine entity id
export const put = ({ api, model, isSocial }: IApi) =>
  request(`${urls.endPointAdmin}${api}`, {
    method: "PUT",
    body: JSON.stringify(model),
  });
// @ts-ignore
// FIXME: need determine entity id
export const patch = ({ api, model, isSocial }: IApi) =>
  request(`${urls.endPointAdmin}${api}`, {
    method: "PATCH",
    body: JSON.stringify(model),
  });
