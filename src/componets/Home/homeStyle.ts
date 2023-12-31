import { StyleSheet  } from "react-native"

const styles = StyleSheet.create({

    main:{
height:'100%'
    },
    addBtn: {
        borderWidth: 1,
        borderColor: '#2a6ef9',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#2a6ef9',
        borderRadius: 100,
        zIndex:1,
        elevation:5
        },
        btnCon:{
            alignSelf:'flex-end',
            position: 'absolute',
            bottom: '2%',
            right:'2%'

        },
    addTxt: {
        color: 'white',
        fontSize: 25
    },
    content: {
    textAlign:'center'
    },
    headings: {
        fontWeight: 'bold',
        color: 'white',
    },
    numbers:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
    },
    btnContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    padding:5,
    margin:15,
    borderRadius:5,
    backgroundColor: 'skyblue',
    borderColor:'skyblue',
    shadowRadius:5
    }
    , text: {
        fontSize: 20,
        marginTop:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    description: {
        color:'grey',
        fontWeight:'bold',
        textAlign:'center'
        
    },
    stats :{
        alignItems: 'center',
    },
    item :{
        alignItems: 'center',
    },
    ScrollView:{
        marginTop:5,
        marginBottom:75
    }

})

export default styles;