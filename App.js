import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Alert,TouchableNativeFeedback,Keyboard } from 'react-native';

const currencyPerRupee = {
  DOLLAR:0.014,
  EURO : 0.012,
  POUND : 0.011,
  RUBEL: 0.93,
  AUSDOLLAR:0.2,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041,
  CANDOLLAR:0.019
}


export default class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      resultValue:"0.0"
    }
  }

  buttonPressed=(currency)=>{
    if(this.state.inputValue===""){
      Alert.alert("Enter Some Value")
    }
    let result = parseFloat(this.state.inputValue)*currencyPerRupee[currency]
    this.setState({resultValue:result.toFixed(2)})
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultValue}>

                  {this.state.resultValue}

                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input} 
                    selectionColor="#FFF"
                    keyboardType ="numeric"
                    placeholder="Enter Value"
                    value={this.state.inputValue}  
                    onChangeText={inputValue=>this.setState({
                      inputValue
                    })}
                />
            </View>

                <View style={styles.converterButtonContainer}>
                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("DOLLAR")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Dollar
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("EURO")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Euro
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("POUND")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Pound
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("RUBEL")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Rubel
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("AUSDOLLAR")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Aus 
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("YEN")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        yen
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("DINAR")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Dinar
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("BITCOIN")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Bitcoin
                      </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=>this.buttonPressed("CANDOLLAR")}
                      style={styles.converterButton}
                    >
                      <Text style={styles.converterButtonText}>
                        Canada
                      </Text>

                    </TouchableOpacity>
                </View>
        </View>
      </SafeAreaView>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68',
    marginTop:20
  },
  screenView: {
    flex:1,
  },
  resultContainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DE",
    alignItems:"center",
    borderWidth:2,
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFFFFF"
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DE"
  },
  input:{
    color:"#FFFFFF",
    fontSize:30,

  },
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2,
  },
  converterButton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  converterButtonText:{
    color:"#ffffff",
    fontSize:20,
    fontWeight:"bold",
  }
});
