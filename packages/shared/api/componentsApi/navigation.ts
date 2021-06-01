import axios from 'axios';

export default async function getNavigationItemsApi(): Promise<any> {
  return await axios.get('/');
}
