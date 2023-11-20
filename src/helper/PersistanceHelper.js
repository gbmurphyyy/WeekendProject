import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistenceHelper {
  setValue = async (key, value) => {
    try {
      await EncryptedStorage.setItem(key, value);
      console.log('Value written successfully');
    } catch (error) {
      console.error('Error writing value:', error);
    }
  };

  getValue = async key => {
    try {
      const value = await EncryptedStorage.getItem(key);
      return value;
    } catch (error) {
      console.error('Error getting value:', error);
    }
  };

  setObject = async (key, data) => {
    try {
      const stringifiedObject = JSON.stringify(data);
      await this.setValue(key, stringifiedObject);
      console.log('Object written successfully');
    } catch (error) {
      console.error('Error writing object:', error);
    }
  };

  getObject = async key => {
    try {
      const stringifiedObject = await this.getValue(key);
      return JSON.parse(stringifiedObject);
    } catch (error) {
      console.error('Error getting object:', error);
    }
  };
}

export default new PersistenceHelper();
