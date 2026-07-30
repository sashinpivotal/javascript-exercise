async function getDate() {
  const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York');
  const data = await response.json();
  console.log(data);
}

getDate();

async function getDateWithErrorHandling() {
  try {
    const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Failed to fetch current time:', error.message);
    throw error; // re-throw if callers need to know it failed
  }
}

getDateWithErrorHandling();