import Cookies from "js-cookie";

const loginfun = async (email, pass) => {
  if (email == "") return "please enter your email";
  if (pass == "") return "please the password";

  const res = await fetch("http://localhost:8000/api/v1/user/login", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  });

  const result = await res.json();

  if (res.status === 200) {
    console.log(result.user.username);
    Cookies.set("user", JSON.stringify(result.user), {
      expires: 7,
    });

    return "";
  } else {
    return result.message;
  }
};

export default loginfun;
