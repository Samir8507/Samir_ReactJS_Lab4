import axios from "axios"
import IDataList from "../models/IDataList"


const getDataFromServer = () =>{
       return axios.get<IDataList []> (`http://localhost:3000/items`)
       .then(res => res.data)
}

export{
    getDataFromServer
}