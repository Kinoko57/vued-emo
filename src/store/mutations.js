import {VIEW_HEAER,VIEW_FOOTER,VIEW_LOADING,VIEW_USER,VIEW_USEROUT} from './types'
let mutations={ 
  [VIEW_HEAER]:(state,payload)=>state.header=payload,
  [VIEW_FOOTER]:(state,payload)=>state.footer=payload,
  [VIEW_LOADING]:(state,payload)=>state.loading=payload,
  [VIEW_USER]:(state,payload)=>state.user.author=payload.author,
  [VIEW_USEROUT]:(state,payload)=>state.user.author=payload.author
};
export default mutations;

/* let A='a'

let obj={
  [A]:1,
  a:1,
  b:2
}
var aa=12;
alert(window.aa)
alert(obj.a)
alert(obj['a'])
alert(obj[A])  */