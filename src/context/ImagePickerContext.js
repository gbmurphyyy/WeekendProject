import {createContext, useContext, useState} from 'react';
import ImagePicker from 'react-native-image-picker';

export const ImagePickerContext = createContext();

export const ImagePickerProvider = ({children}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <ImagePickerContext.Provider value={{selectedImage, pickImage}}>
      {children}
    </ImagePickerContext.Provider>
  );
};

export const useImagePicker = () => {
  return useContext(ImagePickerContext);
};
