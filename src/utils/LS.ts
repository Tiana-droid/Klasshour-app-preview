import SecureLS from "secure-ls";
let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

export const getStoredAuthToken = () => ls.get("KHauthToken");
export const storeAuthToken = (token: string) => ls.set("KHauthToken", token);
export const storeAdminUser = (user: string) => ls.set("KHadminUser", user);
export const getStoredAdminUser = () => ls.get("KHadminUser");

export const getStoredClientUser = () => ls.get("KHClientUser");
export const storeClientUser = (user: string) => ls.set("KHClientUser", user);

export const removeStoredAuthToken = () => {
  ls.remove("KHauthToken");
  ls.remove("KHadminUser");
  ls.remove("KHClientUser");
};
