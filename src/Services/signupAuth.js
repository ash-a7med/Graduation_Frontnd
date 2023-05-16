import Cookies from "js-cookie";

const signupfun = async (username, email, pass, cpass) => {
  if (pass !== cpass) {
    return "password not match";
  }
  const res = await fetch("http://localhost:8000/api/v1/user", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: pass,
      level: "1",
      score: "0",
    }),
  });

  const result = await res.json();
  if (res.status === 201) {
    Cookies.set("user", JSON.stringify(result["data"]), {
      expires: 7,
    });
    return "user created successfully";
  } else return "email alredy exists";
};

export default signupfun;
