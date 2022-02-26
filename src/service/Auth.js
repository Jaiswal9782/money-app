import AsyncStorage from "@react-native-async-storage/async-storage";
// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    AsyncStorage.removeItem("token");
  },
  isAuth() {
    return AsyncStorage.getItem("token");
  },
  setToken(token) {
    try {
      AsyncStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log(error);
    }
  },
  getToken() {
    try {
      const authTokenString = AsyncStorage.getItem("token");
      if (!authTokenString) {
        return "";
      }
      return JSON.parse(authTokenString);
    } catch (error) {
      console.log(error);
    }
  },
};
export default Auth;
