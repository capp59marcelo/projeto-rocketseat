import Axios from "axios";

const Api = Axios.create({baseURL:"https://rocketseat-node.herokuapp.com/api"});

export default Api;