import axios from 'axios';

export default async function ExampleApi() {
  try {
    return await axios
      .get('https://next.json-generator.com/EyQLS6dt5')
      .then(resp => resp);
  } catch (e) {
    return e.message;
  }
}
