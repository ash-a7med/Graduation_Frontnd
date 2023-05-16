const reset_passwordfun = async (pass, cpass, id, token) => {
  if (pass !== cpass) return "pasword not equal";
  const res = await fetch(
    `http://localhost:8000/api/v1/user/reset-password/${id}/${token}`,
    {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: pass,
        confirm: cpass,
      }),
    }
  );
  const result = await res.json();
  console.log(result);
  if (res.status === 200) {
    return "";
  } else {
    return "error";
  }
};

export default reset_passwordfun;
