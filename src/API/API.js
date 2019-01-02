import axios from 'axios';

let API = (url,type='get',data={},header={}) => {
  let reqHeader = Object.assign(header,{
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Credentials': 'true'
  });

  if(type === 'get') {
    return axios.get(url, reqHeader).then((response)=>{
      return Promise.resolve(response)
    },(err)=>{
      return Promise.reject(err)
    }).catch((err)=>{
      return Promise.reject(err)
    })

  } else if(type === 'post') {
    return axios.post(url, data, reqHeader).then((response)=>{
      return Promise.resolve(response)
    },(err)=>{
      return Promise.reject(err)
    }).catch((err)=>{
      return Promise.reject(err)
    })

  } else if(type === 'put') {
    debugger
    return axios.put(url, data, reqHeader).then((response)=>{
      debugger
      return Promise.resolve(response)
    },(err)=>{
      return Promise.reject(err)
    }).catch((err)=>{
      return Promise.reject(err)
    })

  } else if(type === 'delete') {
    return axios.delete(url, reqHeader).then((response)=>{
      return Promise.resolve(response)
    },(err)=>{
      return Promise.reject(err)
    }).catch((err)=>{
      return Promise.reject(err)
    })
  }
};

export default API
