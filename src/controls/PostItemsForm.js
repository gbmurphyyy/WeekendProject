import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {kApiPostItems} from '../../config/WebService';
import {itemActions} from '../../features/item/itemSlicer';
import {ApiHelper} from '../../helpers';

const {request, failure, addItem} = itemActions;

const PostItemsForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

  const inputStyle = {
    ...styles.input,
  };

  const handleSubmit = () => {
    dispatch(
      request({
        url: kApiPostItems,
        data: {title, image, details},
        header: {'X-Access-Token': user?.data?.accessToken},
        requestType: 'POST',
      }),
    );

    clearInputs();
    // Alternatively, you can use ApiHelper.post as follows:
    // ApiHelper.post(kApiPostItems, { title, image, details }, { 'X-Access-Token': user?.data?.accessToken })
    //   .then(response => {
    //     dispatch(addItem(response));
    //   })
    //   .catch(error => {
    //     dispatch(failure(error));
    //   });
  };

  const clearInputs = () => {
    setTitle('');
    setImage('');
    setDetails('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={inputStyle}
        placeholder="Enter title"
      />
      <TextInput
        value={image}
        onChangeText={text => setImage(text)}
        style={inputStyle}
        placeholder="Enter image URL"
      />
      <TextInput
        value={details}
        onChangeText={text => setDetails(text)}
        style={inputStyle}
        placeholder="Enter Details"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'yellow',
    height: 40,
    margin: 10,
    padding: 5,
  },
});

export default PostItemsForm;

// import {View, Text, TextInput, Button} from 'react-native';
// import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {kApiPostItems} from '../config/WebService';
// import {itemActions} from '../features/itemSlice';
// import ApiHelper from '../helper';

// const {request, success, failure, addItem} = itemActions;

// export default function PostItemsForm(props) {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user);

//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState('');
//   const [details, setDetails] = useState('');

//   const inputStyle = {
//     backgroundColor: 'yellow',
//     height: 40,
//     margin: 10,
//     padding: 5,
//   };

//   return (
//     <View>
//       <TextInput
//         value={title}
//         onChangeText={ct => {
//           setTitle(ct);
//         }}
//         style={inputStyle}
//         placeholder="Enter title"
//       />
//       <TextInput
//         value={image}
//         onChangeText={ct => {
//           setImage(ct);
//         }}
//         style={inputStyle}
//         placeholder="Enter image URL"
//       />
//       <TextInput
//         value={details}
//         onChangeText={ct => {
//           setDetails(ct);
//         }}
//         style={inputStyle}
//         placeholder="Enter Details"
//       />
//       <Button
//         title="Submit"
//         onPress={() => {
//           dispatch(request());

//           ApiHelper.post(
//             kApiPostItems,
//             {title, image, details},
//             {'X-Access-Token': user?.data?.accessToken},
//           )
//             .then(response => {
//               dispatch(addItem(response));
//             })
//             .catch(error => {
//               dispatch(failure(error));
//             });
//         }}
//       />
//     </View>
//   );
// }
