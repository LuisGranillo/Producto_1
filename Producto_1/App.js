import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import logo from './assets/images/logo.jpg'
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import{FontAwesome5,FontAwesome} from '@expo/vector-icons';

function InicioScreen({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>
        <Image source={require('./assets/images/logo_consola.jpg')} style={styles.logo} resizeMode="contain"></Image>
        <Text style={styles.titulo}>PS1 LOS MEJORES CLASICOS</Text>
        <Image source={{uri:"https://statics.memondo.com/p/s1/gifs/2019/10/GIF_678569_f7aa59af94f14e7595f7272596615902_una_de_las_mejores_sensaciones_del_mundo.gif"}} style={styles.loader} resizeMode="contain"></Image>
        <TouchableOpacity style={styles.boton} onPress={()=>{
          navigation.navigate("Bomberman");
        }}>
          <Text style={styles.botonText}>Hey gamer presiona aqui!!</Text>
          </TouchableOpacity>
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
}
function BombermanScreen({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>
        <Image source={{uri:"https://m.gifmania.com.mx/Gifs-Animados-Videojuegos/Gif-Animadas-Videojuegos-Clasicos-Arcade/Imagenes-Animadas-Bomberman/Videojuego-Bomberman-73404.gif"}} style={styles.logo} resizeMode="contain"></Image>

        <Image source={{uri:"https://art.pixilart.com/8093d52c384ac1e.gif"}} style={styles.logo} resizeMode="contain"></Image>
        <Text style={styles.titulo}>BOMBERMAN</Text>
        <Text style={styles.parrafobomber}>Juego: Multijugador</Text>
        <Text style={styles.parrafobomber}>Genero: Accion</Text>
        <Text style={styles.parrafobomber}>Fecha de lanzamiento: 1983</Text>
        <Text style={styles.parrafobomber}>Plataformas: varias</Text>
        <TouchableOpacity style={styles.boton2} onPress={()=>{
          navigation.navigate("Inicio");
        }}>
          <Text style={styles.botonText}>Regresar al inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton3} onPress={()=>{
          navigation.navigate("Crash Bandicoot");
        }}>
          <Text style={styles.botonText}>Siguiente videojuego</Text>
          </TouchableOpacity>
          
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
}
function CrashBandicoot({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>

        <Image source={require('./assets/images/logo_crashbandicoot.jpg')} style={styles.logo} resizeMode="contain"></Image>
        <Image source={{uri:"https://media0.giphy.com/media/9A1tvWXQrzHh2qhMfK/giphy.gif"}} style={styles.logo} resizeMode="contain"></Image>

        <Text style={styles.titulo}>Crash Bandicoot 3</Text>
        <Text style={styles.crash3}>Juego: De un solo jugador</Text>
        <Text style={styles.crash3}>Genero: Aventura</Text>
        <Text style={styles.crash3}>Fecha de lanzamiento: 1983</Text>
        <Text style={styles.crash3}>Plataformas: Playstation</Text>
          <TouchableOpacity style={styles.boton3} onPress={()=>{
          navigation.navigate("Bomberman");
          
        }}>
          <Text style={styles.botonText}>Anterior juego</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton4} onPress={()=>{
          navigation.navigate("Rockman");
        }}>
          <Text style={styles.botonText}>Siguiente juego</Text>
          </TouchableOpacity>
          
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
}
function rockmanScreen({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>

        <Image source={require('./assets/images/logo_rockman.jpg')} style={styles.logo} resizeMode="contain"></Image>
        <Image source={{uri:"https://steamuserimages-a.akamaihd.net/ugc/978855622151861619/38F4560E86635FCC93C2A7CB894AC6A58D62ED54/"}} style={styles.logo} resizeMode="contain"></Image>

        <Text style={styles.titulo}>Rockman X4</Text>
        <Text style={styles.parrafobomber}>Juego: De un solo jugador</Text>
        <Text style={styles.parrafobomber}>Genero: Aventura</Text>
        <Text style={styles.parrafobomber}>Fecha de lanzamiento: 1 de agosto de 1991</Text>
        <Text style={styles.parrafobomber}>Plataformas: Playstation</Text>
          <TouchableOpacity style={styles.boton3} onPress={()=>{
          navigation.navigate("Crash Bandicoot");
          
        }}>
          <Text style={styles.botonText}>Anterior juego</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton4} onPress={()=>{
          navigation.navigate("Mortal Kombat");
        }}>
          <Text style={styles.botonText}>Siguiente juego</Text>
          </TouchableOpacity>
          
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
}
function MortalcombatScreen({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>

        <Image source={require('./assets/images/logoMortalcombat.png')} style={styles.logo} resizeMode="contain"></Image>
        <Image source={{uri:"https://i.pinimg.com/originals/91/b8/ff/91b8ff75d88e22921e2cb86969899012.gif"}} style={styles.logo} resizeMode="contain"></Image>

        <Text style={styles.titulo}>Mortal kombat</Text>
        <Text style={styles.kombat}>Juego: de dos jugadores</Text>
        <Text style={styles.kombat}>Genero: accion y combate</Text>
        <Text style={styles.kombat}>Fecha de lanzamiento: 25 de junio de 1993</Text>
        <Text style={styles.kombat}>Plataformas: Playstation</Text>
          <TouchableOpacity style={styles.boton3} onPress={()=>{
          navigation.navigate("Crash Bandicoot");
          
        }}>
          <Text style={styles.botonText}>Anterior juego</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton4} onPress={()=>{
          navigation.navigate("CTR");
        }}>
          <Text style={styles.botonText}>Siguiente juego</Text>
          </TouchableOpacity>
          
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
}

function CTRScreen({navigation}){
  return(
    <View style={styles.container}>
        <View style={{width:"50%", flex:1,alignItems:"center"}}></View>

        <Image source={require('./assets/images/crash_logo.jpg')} style={styles.logo} resizeMode="contain"></Image>
        <Image source={{uri:"https://thumbs.gfycat.com/IndelibleLavishBangeltiger-size_restricted.gif"}} style={styles.logo} resizeMode="contain"></Image>

        <Text style={styles.titulo}>Crash Bandicoot CTR</Text>
        <Text style={styles.CTR}>Juego: de 4 jugadores</Text>
        <Text style={styles.CTR}>Genero: accion y aventura</Text>
        <Text style={styles.CTR}>Fecha de lanzamiento: 30 de septiembre de 1999</Text>
        <Text style={styles.CTR}>Plataformas: Playstation</Text>
          <TouchableOpacity style={styles.boton3} onPress={()=>{
          navigation.navigate("Mortal Kombat");
          
        }}>
          <Text style={styles.botonText}>Anterior juego</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton4} onPress={()=>{
          navigation.navigate("Dragon ball GT: final bout");
        }}>
          <Text style={styles.botonText}>Siguiente juego</Text>
          </TouchableOpacity>
          
        <View style={{flex:2,alignItems:"center"}}>

</View>
<View style={{flex:2}}>
</View>
</View>
  
  );
    }
  function DBGcreen({navigation}){
    return(
      <View style={styles.container}>
          <View style={{width:"50%", flex:1,alignItems:"center"}}></View>
  
          <Image source={{uri:"https://thumbs.gfycat.com/EcstaticDearHoverfly-small.gif"}} style={styles.logo} resizeMode="contain"></Image>
          <Image source={{uri:"https://64.media.tumblr.com/65e47571a1ba1f4304b19f747ed741e4/tumblr_n1m7yjRNru1qd4q8ao1_500.gifv"}} style={styles.logo} resizeMode="contain"></Image>
  
          <Text style={styles.titulo}>Dragon Ball GT: Bout</Text>
          <Text style={styles.parrafobomber}>Juego: de 2 jugadores</Text>
          <Text style={styles.parrafobomber}>Genero: accion y combate</Text>
          <Text style={styles.parrafobomber}>Fecha de lanzamiento: 1 de abril de 1997</Text>
          <Text style={styles.parrafobomber}>Plataformas: Playstation</Text>
            <TouchableOpacity style={styles.boton3} onPress={()=>{
            navigation.navigate("CTR");
            
          }}>
            <Text style={styles.botonText}>Anterior juego</Text>
            </TouchableOpacity>
         
            
          <View style={{flex:2,alignItems:"center"}}>
  
  </View>
  <View style={{flex:2}}>
  </View>
  </View>
    
    );
  }
const Main=createStackNavigator();

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text style={styles.titulo}>PS1</Text>
      <Text style={{fontSize: 20,color:'#2E6DB4',fontSize:20, marginBottom:20}}>LOS MEJORES CLASICOS </Text>
      <Image source={logo} style={styles.logo}></Image>
      <Image source={{uri:"https://thumbs.gfycat.com/IndelibleLavishBangeltiger-size_restricted.gif"}} style={styles.loader} ></Image>
      <TouchableOpacity onPress={()=>alert('Hola aventuredo gamer')}style={styles.boton}><Text style={styles.botonText}>Hey gamer presiona aqui!!</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    */
   <NavigationContainer>
      <Main.Navigator>
      <Main.Screen name="Inicio" component={InicioScreen}/>
      <Main.Screen name="Bomberman" component={BombermanScreen}/>
      <Main.Screen name="Crash Bandicoot" component={CrashBandicoot}/>
      <Main.Screen name="Rockman" component={rockmanScreen}/>
      <Main.Screen name="Mortal Kombat" component={MortalcombatScreen}/>
      <Main.Screen name="CTR" component={CTRScreen}/>
      <Main.Screen name="Dragon ball GT: final bout" component={DBGcreen}/>

      </Main.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:20,
    color:'#DF0024',
    marginBottom:20,
    fontWeight:'bold'
},
crash3: {
  fontSize:15,
  color:'#ff8000',
  alignItems:'center',
  fontWeight:'bold'
},
kombat: {
  fontSize:15,
  color:'#572364',
  alignItems:'center',
  fontWeight:'bold'
},
CTR: {
  fontSize:15,
  color:'#0a0a0a',
  alignItems:'center',
  fontWeight:'bold'
},
DBGT: {
  fontSize:15,
  color:'#191970',
  alignItems:'center',
  fontWeight:'bold'
},
logo:{
width:200,
height:200,
marginTop:10
},
loader:{
width:200,
height:200,
margin:10
},
boton:{
backgroundColor:'yellow',
color:'#ff0080',
padding:10,
width:250,
paddingBottom:10,
borderRadius:15,
borderColor:'red',
alignItems:'center',
marginBottom:20
},
boton2:{
  backgroundColor:'red',
  color:'#ff0080',
  padding:10,
  width:250,
  paddingBottom:10,
  borderRadius:15,
  alignItems:'center',
  borderStyle:'solid',
  borderWidth:1,
  marginBottom:20

  },
  boton3:{
    backgroundColor:'blue',
    color:'#FF0000',
    padding:10,
    width:250,
    paddingBottom:10,
    borderRadius:15,
    alignItems:'center',
    borderStyle:'solid',
    borderWidth:1,
    marginBottom:20
  
    },
    boton4:{
      backgroundColor:'yellow',
      color:'#FF0000',
      padding:10,
      width:250,
      paddingBottom:10,
      borderRadius:15,
      alignItems:'center',
      borderStyle:'solid',
      borderWidth:1,
      marginBottom:20
    
      },
  parrafobomber: {
    fontSize:15,
    color:'#0000FF',
    alignItems:'center',
    fontWeight:'bold'
},
botonText:{
fontWeight:'500'
}
});