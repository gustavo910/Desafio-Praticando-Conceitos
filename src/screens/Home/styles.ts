import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#131016',
      padding:24
    },
    Logo:{
      marginLeft:'35%',
      marginTop:30
    },

    view:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:20,
    },
    create:{
      color:'#00c7ff',
      fontSize:20,
    },
    finish:{
      color:'#8284fa',
      fontSize:20,
    },
    input:{
        flex:1,
        height:56,
        borderRadius:5,
        backgroundColor:'#1F1E25',
        color:'#FFF',
        padding:16,
        fontSize:16,
        marginRight:12,
    },
    buttonText:{
        color:'#FFF',
        fontSize:24,
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#1e6f9f',
        alignItems:'center',
        justifyContent:'center',
    },
    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:16,
        marginBottom:42
    },
    listEmptyText:{
      color:'#FFF',
      fontSize:14,
      textAlign:"center",
      marginTop:10
  },
  Icon:{

    marginLeft:'40%',
    marginTop:20,

  },
  })