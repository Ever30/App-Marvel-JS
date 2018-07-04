import axios from "axios";
import md5 from "md5";

export default name =>{

const ts = new Date().getTime();
const publicKey = "84a63a612ba8faa5a76e3d7f8c55859d";
const privateKey = "d52a54dde1decc8315e831a2b828429b37173587";

const hash = md5(`${ts}${privateKey}${publicKey}`);
const heroName = 'Hulk';

const instance = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroName}&apikey=${publicKey}&hash=${hash}`,
  timeout: 10000
});

instance
  .get()
  .then(response => console.log(response.data.data.results))
  .catch(error => console.log(error))
}