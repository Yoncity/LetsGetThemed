import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (KEY, VALUE) => {
  try {
    await AsyncStorage.setItem(KEY, VALUE);
  } catch (error) {
    console.log('Error Saving...', error);
  }
};

export const retrieveData = async KEY => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log('Error Retriving...', error);
  }
};
