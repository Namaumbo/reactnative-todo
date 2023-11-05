import { StyleSheet } from "react-native";

const detailsStyles = StyleSheet.create({
    main:{
        backgroundColor:'skyblue',
        borderColor:'skyblue',
        borderWidth:.5,
        padding:10,
        borderRadius:4,
        marginTop:10,
        margin:5,
        height:'auto',
        paddingLeft:8,
    },
    title: {
        fontWeight:'bold',
        fontSize: 15,
    },
    comp:{
        textAlign: 'center',
        color: 'white'
    },
    del:{
        backgroundColor:'red',
        padding:10,
        width:100, 
        borderWidth:.5,
        borderColor:'red',
        borderRadius:4,

    },
    desc:{
        textAlign: 'center',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:5,
        
    },
    btn:{
        backgroundColor:'green',
        padding:10,
        width:100,
        borderWidth:.5,
        borderColor:'green',
        borderRadius:4,
        marginRight:5,
    },
    btns:{
        flexDirection: 'row',
        alignSelf:'center',
        marginTop:12
    }

})

export default detailsStyles