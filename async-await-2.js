async function getDate() {
  const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York');
  const data = await response.json();
  console.log(data);
}

getDate();
