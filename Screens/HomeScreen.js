import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity , TextInput, SectionList,} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import Premium from '../assets/Premium.png';
import mid1 from '../assets/mid1.png';
import mid2 from '../assets/mid2.png';
import mid3 from '../assets/mid3.png';
import folder from '../assets/folder.png'

const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
       <View style={styles.imagetxtContainer}>
           <Text style={styles.imageTxt}>2d ago</Text>
       </View>
      </View>
    );
  };


const SECTIONS = [
    {
      horizontal: true,
      data: [
        {
            key: '1',
            text: 'Item text 1',
            uri: 'https://picsum.photos/id/1/200',
          },
          {
            key: '2',
            text: 'Item text 2',
            uri: 'https://picsum.photos/id/10/200',
          },
    
          {
            key: '3',
            text: 'Item text 3',
            uri: 'https://picsum.photos/id/1002/200',
          },
          {
            key: '4',
            text: 'Item text 4',
            uri: 'https://picsum.photos/id/1006/200',
          },
          {
            key: '5',
            text: 'Item text 5',
            uri: 'https://picsum.photos/id/1008/200',
          },
      ],
    },
    
  ];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
        <View style={styles.left}>
        <Text style={styles.title}>Good Evening</Text>
        <Text style={styles.subtitle}>Welcome back</Text>
        </View>
        <View style={styles.right}>
        <Image source={Premium} />
        </View>
        </View>
        <View style={styles.blankView}>
            <Text style={styles.h1}>Unlock Premium</Text>
            <Text style={styles.h2}>Create Unlimited HD Scan & Picture to Text Scans without watermarks</Text>
        </View>
        <View style={styles.section}>
            <FontAwesome5 name ='search' size={16} color='#9B9B9B' style={{left:10}} />
            <TextInput
            style={styles.input}
            placeholder='Search through your scans'  
      />
        </View>
        <View style={styles.logoBar}>
        <Image source={mid1} style={styles.img} />
        <Image source={mid2} style={styles.img} />
        <Image source={mid3} style={styles.img} />
        </View>
        <View style={styles.logoBar}>
            <Text style={styles.logotxt}>Single Scan</Text>
            <Text style={styles.logotxt}>Batch Scan</Text>
            <Text style={styles.logotxt}>Scan to Text</Text>
        </View>
        <Text style={styles.flatlistTxt}>Recent Scans</Text>
        <View>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
        </View>
        <View style={styles.footer}>
            <Text style={styles.folderTxt}>Folders</Text>
            <Image source={folder} style={styles.folderlogo} />
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E5E5E5'
    },
    top:{
        paddingHorizontal:24,
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    left:{},
    right:{},
    title:{
        fontSize:34,
        fontWeight:'700',
        lineHeight:41
    },
    subtitle:{
        fontSize:18,
        fontWeight:'500',
        lineHeight:21,
        color:'#9B9B9B',
    },
    blankView:{
        marginHorizontal:24,
        marginTop:24,
        height:87,
        backgroundColor:'#0F8CFF',
        borderRadius:10,
    },
    h1:{
        paddingLeft:16,
        paddingTop:16,
        fontSize:18,
        fontWeight:'700',
        color:'#FFFFFF'
    },
    h2:{
        paddingLeft:16,
        paddingTop:6,
        fontSize:12,
        fontWeight:'700',
        color:'#FFFFFF'
    },
    section:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'#FFFFFF',
        height:38,
        marginTop:24,
        marginHorizontal:24

    },
    input:{
        flex:1,
        left:20
    },
    logoBar:{
        marginTop:35.92,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    img:{
        width:28.8,
        height:28.8
    },
    logotxt:{
        fontSize:12,
        fontWeight:'700',
        lineHeight:14.32,
        bottom:20
    },
    flatlistTxt:{
        marginLeft:24,
        fontSize:20,
        fontWeight:'700',
        lineHeight:23.87
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
      },
      item: {
        margin: 10,
        
      },
      itemPhoto: {
        width: 150,
        height: 150,
        borderRadius:20
      },
      itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
      },
      footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:24,
        
      },
      folderTxt:{
        fontSize:20,
        fontWeight:'700',
        lineHeight:23.87 
      },
      folderlogo:{
          width:16.82,
          height:16.82
      },
     imagetxtContainer:{
         width:52,
         height:22,
         backgroundColor:'#49A6FC',
         borderRadius:5,
         alignItems:'center',
         justifyContent:'center',
         bottom:'20%',
         left:'10%'
     },
     imageTxt:{
         fontSize:12,
         fontWeight:'700',
         lineHeight:14.32,
         color:'#FFFFFF'
     },
})