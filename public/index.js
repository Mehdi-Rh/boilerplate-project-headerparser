const getWhoami = async () => {
  const code = document.getElementById("whoami");

  const data = await fetch("http://localhost:3000/api/whoami");
  const whoami = await data.json();

  code.innerHTML = `{"ipaddress":${whoami.ipaddress},"language":${whoami.language},<br />"software":"${whoami.software}}`;
};
getWhoami();
