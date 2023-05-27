const forget_passwordfun = async (email) => {
  if (email === "") return "please enter your email";
  const res = await fetch("http://localhost:8000/api/v1/user/forget_password", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  if (res.status === 200) {
    return "done";
  } else {
    const result = await res.json();
    return result.message;
  }
};

export default forget_passwordfun;
