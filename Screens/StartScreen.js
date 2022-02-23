import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';
import { FontAwesome5 } from '@expo/vector-icons';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';



const StartScreen = ({navigation}) => {
  return (
    <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
    <View key="1" style={styles.page}>
      <Image source={image1} style={styles.im}/>
      <Text style={styles.title}>Scan anything in HD, wherever you are...</Text>
      <Text style={styles.txt}>Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. </Text>
    </View>
    <View key="2" style={styles.page}>
    <Image source={image2} style={styles.im}/>
      <Text style={styles.title}>Navigate work documents like a Pro</Text>
      <Text style={styles.txt}>Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. </Text>
    </View>
    <View key="3" style={styles.page}>
    <Image source={image4} style={styles.im}/>
      <Text style={styles.title}>Less time scanning homework more time for fun</Text>
      <Text style={styles.txt}>Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!</Text>
    </View>
    <View key="4" style={styles.page}>
    <Image source={image3} style={styles.im}/>
      <Text style={styles.title}>Covert Pictures to Text with our next generation offline OCR</Text>
      <Text style={styles.txt}>Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds</Text>
      <View style={styles.logo}>
          <TouchableOpacity onPress={()=>{navigation.navigate('first')}}>
            <FontAwesome5 name='chevron-circle-right' color='#49A6FC' size={55} />
          </TouchableOpacity>
      </View>
    </View>
    </PagerView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
      },
      page:{
          backgroundColor:'#E5E5E5',
          justifyContent:'center',
          alignContent:'center',
          alignItems:'center',
          paddingHorizontal:45
      },
      title:{
        fontSize:18,
        fontWeight:'500',
        lineHeight:21.48,
        marginTop:70,
        textAlign:'center'
      },
      txt:{
        fontSize:14,
        fontWeight:'500',
        lineHeight:20,
        textAlign:'center',
        marginTop:35
      },
      im:{

      },
      logo:{
          marginTop:40,
          left:'40%'
      },
})