import axios from "axios";

export const LOGIN_URL = process.env.REACT_APP_API_URL+"users/login";
export const REGISTER_URL =process.env.REACT_APP_API_URL+ "users";
export const CREATE_RECIPE_URL =process.env.REACT_APP_API_URL+"recipes";
export const REQUEST_CODE_URL = process.env.REACT_APP_API_URL+"api/admin/request-code";
export const ME_URL = process.env.REACT_APP_API_URL+"api/admin/me";
export const LIST_URL = process.env.REACT_APP_API_URL+"api/admin";
export const LIST_URL_FRONT = process.env.REACT_APP_API_URL+"api/auth";
export function login(state) {
  return axios.post(LOGIN_URL, state);
}

export function register(state) {
  return axios.post(REGISTER_URL, state);
}

export function createRecipes(state) {
  return axios.post(CREATE_RECIPE_URL,state);
}
export function updateRecipes(state) {
  return axios.put(CREATE_RECIPE_URL,state);
}
export function requestCode(email) {
  return axios.post(REQUEST_CODE_URL, { email });
}

export function getUserByToken() {
  // adminorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
export function getAllUsers() {

  return axios.get(LIST_URL);
}
export function getAllRecipes() {

  return axios.get(process.env.REACT_APP_API_URL+"recipes");
}
export function getSearchRecipes(search) {

  return axios.get(process.env.REACT_APP_API_URL+"recipes/search/"+search);
}
export function getAllUsersFrontend() {

  return axios.get(LIST_URL_FRONT);
}

export function updateStatus(_id,isBanned) {
  return axios.put(LIST_URL_FRONT+'/status/'+_id, { isBanned });
}
export function getMarquee() {
  return axios.get(process.env.REACT_APP_API_URL+"api/admin/marquee");
}
export function deleteRecipe(_id) {
  return axios.delete(CREATE_RECIPE_URL+'/'+_id);
}
export function getStats() {
  return axios.get(process.env.REACT_APP_API_URL+'api/stats');
}