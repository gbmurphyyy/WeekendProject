// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
// };

module.exports = function (api) {
  api.cache(true)
  return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-reanimated/plugin'],
  }
}
