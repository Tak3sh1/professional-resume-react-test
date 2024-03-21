import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView, Button} from 'react-native';

import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';


export default function App() {
  return (
   
     <View style={styles.container}>
    <SafeAreaView >
    <ScrollView>
    
    <View 
   
      style={{
      background:'#701198',
      shadowColor:'#000',

        marginTop:140,
        flexDirection: 'row',
        height: 200,
        padding: 20,
      }}>
   
          
    </View>
      <Card  style={styles.card }><Text>    </Text>
          <Image style={styles.image}
          source={require('/gato.jpg')}
        />
        <Text>    </Text>
       <Text style={{fontWeight: 'bold', color:'#ac21e6',marginLeft:100, fontSize: 17, marginTop: -10}}>
     Takeshi
  <Text style={{color: '#ac21e6'}}> - Estudante </Text>
   
</Text>


        <Text>    </Text>
         <Text style={{fontWeight: 'bold',color: '#ac21e6'}}>  ESTUDOS: </Text>
         <Text style={{color: '#FFFFFF'}}>   Etec Adolpho Berezin</Text>
         
           <Text style={{color: '#FFFFFF'}}>   3/3 - Desenvolvimento de Sistemas</Text>
           <Text>    </Text>
           <Text style={{fontWeight: 'bold', color: '#ac21e6'}}>   IDIOMAS:</Text>
           <Text style={{color: '#FFFFFF'}}>   Português - Nativo/Fluente</Text>
            <Text style={{color: '#FFFFFF'}}>   Japonês - Intermediário</Text>
            <Text style={{color: '#FFFFFF'}}>   Inglês - Intermediário</Text>
             <Text style={{color: '#FFFFFF'}}>   Espanhol - Básico</Text>
              <Text>    </Text>
         <Text style={{fontWeight: 'bold',color: '#ac21e6'}}>   CONTATO: </Text>
         <Text style={{color: '#FFFFFF'}}>   Telefone: (11)95478-9542</Text>
          <Text style={{color: '#FFFFFF'}}>   E-mail: </Text>


      </Card>
      </ScrollView>
    </SafeAreaView>
    </View>
  );

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 

  card: {
  width: '400px',
   height: '700px',
   backgroundColor: '#000', 
   },

  image: {
    
marginTop: -80,
marginLeft: 135,
   width: '100px',
   height: '100px',
 borderRadius: 50,
         
  }
});

