export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export function updateUserInfo(userInfo) {
  return {
    type: UPDATE_USER_INFO,
    userInfo
  };
}
