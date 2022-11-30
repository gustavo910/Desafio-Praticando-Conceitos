
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox} from "react-native-elements";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";
import { useState } from "react";
import { useContext } from "react";
import { Contador } from "../../screens/Home";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Tasks({ name, onRemove }: Props) {
  const [checked,setChecked]= useState(false)
  const {list,setList}= useContext(Contador)

  function press(){
    if(checked){
        setList([{cont:list[0].cont-1}])
        setChecked(false)
        
    }
    else if(!checked){
        //setList(list+1)
        setList([{cont:list[0].cont+1}])
        setChecked(true)
    }
  }
    return (
        <View style={styles.container}>
            
           
            <TouchableOpacity>
            
                <CheckBox
                    center
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    uncheckedColor='#1e6f9f'
                    checked={checked}
                    onPress={() => press()}
                />

            </TouchableOpacity>
           

            {checked?
            <Text style={styles.nameLine}>{name}</Text>
            :
            <Text style={styles.name}>{name}</Text>
            }
            
            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}
            >

                <Text style={styles.buttonText}><Ionicons name="md-trash" size={20} /></Text>
            </TouchableOpacity>
        </View>
    )
}