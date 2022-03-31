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
    if (
      resource === "coupon/couponcategory" &&
      params.data.featured_image_url
    ) {
      // fallback to the default implementation
      let formData = new FormData();

      if (params.data.featured)
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
    if (resource === "banner" && params.data.image) {
      // fallback to the default implementation
      let formData = new FormData();

      console.log(params);

      formData.append("link", params.data.link);
      formData.append("image", params.data.image.rawFile);
      formData.append("store", params.data.store);

      return httpClient(`${process.env.REACT_APP_BACKEND}/${resource}`, {
        method: "POST",
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }

    if (resource === "stores" && params.data.image) {
      // fallback to the default implementation
      let formData = new FormData();

      console.log(resource, params);

      formData.append("name", params.data.name);
      formData.append("homepage", params.data.homepage);
      formData.append("affiliate_link", params.data.affiliate_link);
      formData.append("network_id", params.data.network_id);
      formData.append("featured", params.data.featured);
      formData.append("cashback_enabled", params.data.cashback_enabled);
      formData.append("cashback_percent", params.data.cashback_percent);
      formData.append("cashback", params.data.cashback);
      formData.append("cashback_type", params.data.cashback_type);
      formData.append("amount_type", params.data.amount_type);
      formData.append("rate_type", params.data.rate_type);
      formData.append("cashback_was", params.data.cashback_was);
      formData.append("tracking_speed", params.data.tracking_speed);
      formData.append("terms", params.data.terms);
      formData.append("tips", params.data.tips);
      formData.append("h1", params.data.h1);
      formData.append("h2", params.data.h2);
      formData.append("description", params.data.description);
      formData.append("image", params.data.image.rawFile);
      formData.append("network_campaign_id", params.data.network_campaign_id);
      formData.append("coupon_count", params.data.coupon_count);
      formData.append("payout_days", params.data.payout_days);
      formData.append("is_claimable", params.data.is_claimable);
      formData.append("domain_name", params.data.domain_name);
      formData.append("apply_coupon", params.data.apply_coupon);
      formData.append("checkout_url", params.data.checkout_url);
      formData.append("slug", params.data.slug);
      formData.append("status", params.data.status);
      formData.append("color1", params.data.color1);
      formData.append("color2", params.data.color2);
      formData.append("categories", params.data.categories);

      return httpClient(`${process.env.REACT_APP_BACKEND}/${resource}`, {
        method: "POST",
        body: formData,
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }

    return dataProvider.create(resource, params);
  },

  update: (resource, params) => {
    if (resource === "stores") {
      let formData = new FormData();

      console.log(params.data);

      formData.append("name", params.data.name);
      formData.append("homepage", params.data.homepage);
      formData.append("affiliate_link", params.data.affiliate_link);
      formData.append("network_id", params.data.network_id.id);
      formData.append("featured", params.data.featured);
      formData.append("cashback_enabled", params.data.cashback_enabled);
      formData.append("cashback_percent", params.data.cashback_percent);
      formData.append("cashback", params.data.cashback);
      formData.append("cashback_type", params.data.cashback_type);
      formData.append("amount_type", params.data.amount_type);
      formData.append("rate_type", params.data.rate_type);
      formData.append("cashback_was", params.data.cashback_was);
      formData.append("tracking_speed", params.data.tracking_speed);
      formData.append("terms", params.data.terms);
      formData.append("tips", params.data.tips);
      formData.append("h1", params.data.h1);
      formData.append("h2", params.data.h2);
      formData.append("description", params.data.description);
      if (typeof params.data.image === "object" && params.data.image !== null)
        formData.append("image", params.data.image.rawFile);
      else formData.append("image", params.data.image);
      formData.append("network_campaign_id", params.data.network_campaign_id);
      formData.append("coupon_count", params.data.coupon_count);
      formData.append("payout_days", params.data.payout_days);
      formData.append("is_claimable", params.data.is_claimable);
      formData.append("domain_name", params.data.domain_name);
      formData.append("apply_coupon", params.data.apply_coupon);
      formData.append("checkout_url", params.data.checkout_url);
      formData.append("slug", params.data.slug);
      formData.append("status", params.data.status);
      formData.append("color1", params.data.color1);
      formData.append("color2", params.data.color2);
      if (params.data.categories.length !== 0) {
        const categories = [];
        params.data.categories.forEach((category) =>
          categories.push(category.cat_id)
        );
        formData.append("categories", categories);
      }

      return httpClient(
        `${process.env.REACT_APP_BACKEND}/${resource}/${params.id}`,
        {
          method: "PUT",
          body: formData,
        }
      ).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }

    return dataProvider.update(resource, params);
  },
};

export default myDataProvider;
