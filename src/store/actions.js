import axios from 'axios';
import * as types from './types';
let actions={
  [types.VIEW_HEAER]:({commit,state},payload)=>commit(types.VIEW_HEAER,payload),
  [types.VIEW_FOOTER]:({commit,state},payload)=>commit(types.VIEW_FOOTER,payload),
  [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
  [types.VIEW_USER]:({commit,state},payload)=>{
   return axios({
      url:'/data/user.json',
    }).then(
      res=>{
        if(res.data.data.username==payload.username&&res.data.data.password==payload.password)
        {
           commit({type:types.VIEW_USER,author:true})
        }else{
          commit({type:types.VIEW_USER,author:false})
        }
     }
    )
  },
  [types.VIEW_USEROUT]:({commit,state},payload)=>commit(types.VIEW_USEROUT,payload),
};
export default actions;