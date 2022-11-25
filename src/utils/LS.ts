import SecureLS from "secure-ls";
let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

export const getStoredAuthToken = () => ls.get("authToken");
export const storeAuthToken = (token: string) => ls.set("authToken", token);
export const storeAdminUser = (user: string) => ls.set("adminUser", user);
export const getStoredAdminUser = () => ls.get("adminUser");

export const getStoredClientUser = () => ls.get("ClientUser");
export const storeClientUser = (user: string) => ls.set("ClientUser", user);

export const removeStoredAuthToken = () => {
  ls.remove("authToken");
  ls.remove("adminUser");
  ls.remove("ClientUser");
};
