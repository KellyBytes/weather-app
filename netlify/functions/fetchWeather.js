export async function handler(event, context) {
  const apiKey = process.env.API_KEY; // Netlifyに登録したキー
  const { city } = event.queryStringParameters;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
