import { SafeAreaView, StyleSheet, Text, View ,StatusBar,TouchableOpacity,Image,onPressHandler, Alert, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



function Request() {

    const navigation = useNavigation()

      const onPressHandler = ()=>{
        navigation.navigate('ViewDonorDetails')
      }

  return (



    <SafeAreaView style={styles.container}>

       <View style={styles.Headerview}>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('HomeScreen')}
          >
            <View style={styles.Menuview}>
              <Image
                style={styles.menu}
                source={require('../assets/Back.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>Current Request</Text>
        </View>

        <ScrollView >
        <TouchableOpacity 
          onPress={()=> navigation.navigate('PastRequest')}
        >
          <View style={{
            height:75,
            width:350,
            backgroundColor:'#B70404',
            margin:10,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:40,


          }}>
            <View style={styles.Navi} >
            <Image
                style={styles.menu}
                source={require('../assets/PastRequest.png')}
              />
              <Text
                style={{
                  color:'#fff',
                  fontSize:20,
           

                }}
              > Past Request</Text>
            </View>
            </View>
          </TouchableOpacity>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('NewRequest')}
        >
          <View style={{
            height:75,
            width:350,
            backgroundColor:'#B70404',
            margin:10,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:40,


          }}>
            <View style={styles.Navi} >
            <Image
                style={styles.menu}
                source={require('../assets/NewRequest.png')}
              />
              <Text
                style={{
                  color:'#fff',
                  fontSize:20,
           

                }}
              >New Request</Text>
            </View>
            </View>
          </TouchableOpacity>
          <View style={styles.Detail}>
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
            <Text style={styles.DetailsText} > Status : </Text>
          </View >
          <TouchableOpacity style={styles.button}
              onPress={onPressHandler}
            >
              <Text style={styles.textButton}>VIEW DONOR DETAILS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Detail}>
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
            <Text style={styles.DetailsText} > Status : </Text>
          </View >
            <TouchableOpacity style={styles.button}
              onPress={onPressHandler}
            >
              <Text style={styles.textButton}>VIEW DONOR DETAILS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Detail}>
          <View style={styles.DetailTexts}>
            <Text style={styles.DetailsText} >Patient Name : </Text>
            <Text style={styles.DetailsText} >Blood Type : </Text>
            <Text style={styles.DetailsText} >Needed By : </Text>
            <Text style={styles.DetailsText} >Location : </Text>
            <Text style={styles.DetailsText} >Contact NO : </Text>
            <Text style={styles.DetailsText} > Status : </Text>
          </View >
          <TouchableOpacity style={styles.button}
              onPress={onPressHandler}
            >
              <Text style={styles.textButton}>VIEW DONOR DETAILS</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        alignItems:'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    Headerview:{
        flexDirection:'row',
        height: 60,
        width:'100%',
        backgroundColor: '#B70404',
    },
    scrollView: {
      width:'100%',
      height:300,
      marginHorizontal: 20

  },
  Navi:{
    height:60,
    width:340,
    backgroundColor:'#B70404',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    borderWidth:4,
    borderColor:'#fff',
    paddingLeft:50,
  },
    menu:{
        width: 30,
        height: 30, 
        margin: 15,
    },
    text: {
      fontSize:20,
      color:'#ffff',
      marginTop:18,
    },
    Detail:{
      backgroundColor:'#fff',
      width:350,
      height:250,
      marginTop:15,
      elevation:5,
      borderRadius:15,
      margin:10,

      
    },
    DetailTexts:{
      padding:10,
      height: 145,
      marginBottom:25,
    
    },
    DetailsText:{
      fontSize:15,
      padding:5, 
    },
    DetailsButton:{
      
    },
    button:{
      backgroundColor:'#B70404',
      width:220,
      justifyContent:'center',
      alignItems: 'center',
      height:35,
      borderRadius:20,
      margin:10,
      left:60,
      top:20
      
    },
    textButton:{
      color:'#ffff',
      fontSize:20,
    }
})


export default Request;