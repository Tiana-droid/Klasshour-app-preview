import api from "../API/wallet";
import baseapi from "../API";
class Wallet {
  //get all bank
  get_all_bank = async () => {
    try {
      const response = await api.get("/bank?currency=NGN");
      return response;
    } catch (error) {
      return error;
    }
  };

  // verify account number
  verify_account_number = async (data: any) => {
    try {
      const response = await api.get(
        `/bank/resolve?account_number=${data.account_number}&bank_code=${data.bank_code}`
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  // fund student wallet
  fund_wallet = async (data: any) => {
    console.log(data)
    try {
      const response = baseapi.post("/pay", data);
      return response;
    } catch (err) {
      return err;
    }
  };
  
}

const WalletObj = new Wallet();
export default WalletObj;