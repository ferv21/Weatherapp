const APIKEY = '80ad32c691f84848b06195357232306';

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
}

export default fetchData;