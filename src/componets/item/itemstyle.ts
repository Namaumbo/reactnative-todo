import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({

    incomplete: {
        elevation:  .5,
        backgroundColor:'white',
        padding: 10,
        borderRadius: 5,
        width: 330,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    completed:{
        borderRightColor:'#FF9209',
        borderRightWidth:2,
        elevation:  1,
        backgroundColor:'#FFEED9',
        padding: 10,
        borderRadius: 5,
        width: 330,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5

    },
    item: {
        width:230,
    
   },
    Btns: {
        flexDirection: 'row'
    },
    completeBtn: {
        fontSize: 25,
        color: 'green',
        marginRight: 10
    },
    deleteBtn: {
        fontSize: 25,
        color: 'red'
    }
})