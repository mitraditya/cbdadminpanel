import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth"));
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  process.env.REACT_APP_BACKEND,
  httpClient
);

const myDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    console.log(resource, params);
    if (resource === "stores/category" && params.data.image) {
      // fallback to the default implementation
      let formData = new FormData();

      formData.append("name", params.data.name);
      formData.append("slug", params.data.slug);
      formData.append("image", params.data.image.rawFile);

      return httpClient(`${process.env.REACT_APP_BACKEND}/${resource}`, {
        method: "POST",
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
    if (resource === "couponcategory" && params.data.featured_image_url) {
      // fallback to the default implementation
      let formData = new FormData();

      formData.append("featured", params.data.featured);
      formData.append("visits", params.data.visits);
      formData.append("h1", params.data.h1);
      formData.append("h2", params.data.h2);
      formData.append(
        "featured_image_url",
        params.data.featured_image_url.rawFile
      );

      return httpClient(`${process.env.REACT_APP_BACKEND}/${resource}`, {
        method: "POST",
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
    return dataProvider.create(resource, params);
  },
};

export default myDataProvider;
