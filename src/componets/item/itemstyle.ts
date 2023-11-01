import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
 
    wrapper: {
        borderWidth: .5,
        borderColor: 'grey',
        padding: 10,
        borderRadius:5,
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom:5
   },
   Btns :{
    flexDirection:'row'
   },
   completeBtn :{
    fontSize:35,
    color:'green',
    marginRight:10
   },
   deleteBtn :{
    fontSize:35,
    color:'red'
   }
})