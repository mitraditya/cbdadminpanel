const getAllUsers = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/user/`, {
      headers: { Authorization: token },
    });
    const users = await res.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
