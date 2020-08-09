import * as Types from '../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import base64 from 'react-native-base64'

//links
function startLinksLoading() {
    return { type: Types.START_LINKS_LOADING };
  }
  
const linksLoaded = (data) =>{

  return {
      type : Types.LINKS_LOADED,
      data
  }
} 
  
function clearLinks() {
  return { type: Types.CLEAR_LINKS };
}
const actFetchLinksRequest = (key_app) => {
  key_app = JSON.stringify({"data": key_app})
  return (dispatch) => {
      return callApi('getlink', 'POST', key_app).then(res => {
          dispatch(linksLoaded(res.data))
      })
  }
}
  
  
export function loadLinks(key_app) {
    return dispatch => {
        dispatch(startLinksLoading());
        // Connect to the API here
        dispatch(actFetchLinksRequest(key_app));
    };
}
  
export function refreshLinks(key_app) {
    return dispatch => {
        dispatch(startLinksLoading());
        dispatch(clearLinks());
        dispatch(actFetchLinksRequest(key_app));
    };
}

export function getLinkID(linkID) {
  return {
    type : Types.GET_ID_LINK,
    linkID
  }
}
