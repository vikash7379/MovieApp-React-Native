import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const Header = () => {
  const [searchInp, setSearchInp] = useState("");


  let login = false;

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Serach here"
        value={searchInp}
        onChange={(text) => setSearchInp(text)}
        placeholderTextColor={'white'}
      />
      {/* {login ? (
        <Text style={{color : 'white'}}>@Vikash</Text>
      ) : (
        <TouchableOpacity style={styles.btn}>
          <Text style={{color : 'black',fontWeight : '800'}}>Login</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width : 220,
    marginVertical: 12,
    borderWidth: 1,
    borderColor : "white",
    padding: 10,
    paddingHorizontal : 20,
    color : 'white',
    borderRadius : 10
  },
  btn : {
    backgroundColor : 'lightblue',
    paddingVertical :9,
    paddingHorizontal : 20,
    borderRadius : 5,
    color : "black"
  }
});

export default Header;
