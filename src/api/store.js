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

export { getStores };
