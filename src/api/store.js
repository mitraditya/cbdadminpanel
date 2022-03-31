const getStores = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/stores/`, {
      headers: {
        Authorization: token,
      },
    });
    const stores = await res.json();
    console.log(stores);
    return stores;
  } catch (err) {
    console.log(err);
  }
};

const getStoreById = async (id) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/stores/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const store = await res.json();
    console.log(store);
    return store;
  } catch (error) {
    console.log(error);
  }
};

export { getStores, getStoreById };
