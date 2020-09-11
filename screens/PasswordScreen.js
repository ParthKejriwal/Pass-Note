import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class PasswordScreen extends Component{

    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
          confirmPassword:''
        }
      }

      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          this.props.navigation.navigate('PasswordScreen')
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

      render(){
        return(
          <View style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.title}>PassNotes</Text>
            </View>
            <View>
                <TextInput
                style={styles.loginBox}
                placeholder="abc@example.com"
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}
              />
              <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="enter Password"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
            <TouchableOpacity
               style={[styles.button,{marginBottom:20, marginTop:20}]}
               onPress = {()=>{
                 this.userLogin(this.state.emailId, this.state.password)
               }}
               >
               <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
          </View>
        </View>
        )
      }
    }

    const styles = StyleSheet.create({
        container:{
         flex:1,
         backgroundColor:'#F8BE85',
         alignItems: 'center',
         justifyContent: 'center'
       },
       title :{
         fontSize:65,
         fontWeight:'300',
         paddingBottom:30,
         color : '#ff3d00'
       },
       loginBox:{
         width: 300,
         height: 40,
         borderBottomWidth: 1.5,
         borderColor : '#ff8a65',
         fontSize: 20,
         margin:10,
         paddingLeft:10
       },      
       button:{
         width:300,
         height:50,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:25,
         backgroundColor:"#ff9800",
         shadowColor: "#000",
         shadowOffset: {
            width: 0,
            height: 8,
         },
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
         padding: 10
       },
       buttonText:{
         color:'#ffff',
         fontWeight:'200',
         fontSize:20
       }
      })