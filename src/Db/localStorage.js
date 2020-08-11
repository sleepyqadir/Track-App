const { AsyncStorage } = require("react-native");

export const _storeData = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    throw error;
  }
};

export const _clearData = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    throw error;
  }
};

export const _retrieveData = async () => {
  try {
    const data = await AsyncStorage.getItem("token");
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
