import { AsyncStorage } from 'react-native';
import axios from 'axios';

// class Api {

//     static getBaseURL() {
//         return 'http://dogwalkingapi.herokuapp.com/'
//     }

//     static async headers() {
//         let header = {
//             'X-UserToken': await (AsyncStorage.getItem('token')),
//             'X-UserTokenSign': await (AsyncStorage.getItem('sign')),
//             'Content-Type': 'application/json'
//         };
//         return header;
//     }

//     static get(route) {
//         return this.xhr(route, null, 'GET');
//     }
//     static post(route, params) {
//         return this.xhr(route, params, 'POST');
//     }

//     static async xhr(route, params, verb) {
//         const url = Api.getBaseURL() + route;
//         let header ={
//                     "Content-Type":"application/json",
//                 }
//         let options = Object.assign({ method: verb, headers: header, url: url }, params ? params : null);
//         return axios(options).then(resp => {
//             if (resp.status == 200 && (resp.data.status == 'success' || resp.data.status == 1 || resp.data.success ==="true")) {
//                 return resp.data;
//             } else {
//                 throw resp.data;
//             }
//         }).catch(error => {
//             message = error.message?error.message:error.data;
//             throw message;
//         });
//     }
// }

// export default Api;




class Api {

    static getBaseURL(url) {
        return 'http://dummy.restapiexample.com/api/v1/'+url
    }

    getRequest=(URL,headers,screenRef)=>(
        new Promise(async(resolve,reject)=>{
            console.log("getRequest request "+this.getBaseURL(URL))
            let headerData =  ""; // Strings.token
            axios.get(this.getBaseURL(URL),{
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "x-access-token":headerData,
                    ...headers
                }
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                console.log("getRequest error"+JSON.stringify(error));
                let errMsg = "";
                if(error.response==undefined){
                    errMsg = error.message
                    reject(errMsg)
                }else{
                    errMsg = error.response.data.Message
                    reject(errMsg)
                }
            })
        })
        
    )

   static postRequest=(URL,body,headers,screenRef)=>(
        new Promise(async(resolve,reject)=>{
            console.log("postRequest request"+Api.getBaseURL(URL)+" "+JSON.stringify(body))
            let headerData =  ""; // Strings.token
            axios.post(Api.getBaseURL(URL), body,{
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "x-access-token":headerData,
                    ...headers
                }
            })
              .then(function (response) {
                // handle success
                console.log("postRequest response"+JSON.stringify(response.data))
                resolve(response.data)
              })
              .catch(function (error) {
                let errMsg = "";
                console.log("postRequest error"+JSON.stringify(error))
                if(error.response==undefined){
                    errMsg = error.message
                    reject(errMsg)
                }else{
                    errMsg = error.response.data
                    reject(errMsg)
                }
                
              });
        })
    )
    
   
}

export default Api