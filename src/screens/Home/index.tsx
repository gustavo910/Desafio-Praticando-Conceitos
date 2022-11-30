import { createContext, useState } from "react"
import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert, Image } from "react-native"
import { Divider } from "react-native-elements";
import { Tasks } from "../../components/Task"
import { styles } from "./styles"
import Ionicons from '@expo/vector-icons/Ionicons';

interface List {
    cont: number;
  }

interface ListContextValue {
    list: List[];
    setList: (data: List[]) => void;
  }
  interface Props {
    children: React.ReactNode;
  }
  const listInitial: ListContextValue = {
    list: [
      {
        cont:0
      }
    ],
    setList: data => {}
  };

export const Contador= createContext<ListContextValue>(listInitial);

export default function Home() {
    const [Task, setTask] = useState<string[]>([])
    const [TaskName, setTaskName] = useState('')
    const [list,setList]= useState<List[]>([{cont:0}])
    

    function handleTaskAdd() {
        if (Task.includes(TaskName)) {
            return Alert.alert("Tarefa já existe", "Já existe uma tarefa na lista com esse nome")

        }
        setTask(prevState => [...prevState, TaskName])
        setTaskName('');
    }
    function handleTaskRemove(name: string) {
        //console.log(Task.filter(p => p !== name));

        Alert.alert("Remover", ` tem certeza que deseja remover a tarefa ${name} ?`,
            [
                {
                    text: 'Sim',
                    onPress: () => setTask(prevState => prevState.filter(p => p !== name))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
        //console.log(`voce clicou em remover em remover o Taske ${name}`)
    }

    return (
        <Contador.Provider value={{list,setList}}> 
        <View style={styles.container} >
            <Image
                style={styles.Logo}
                source={require('./../../../assets/Logo.png')}
            />
            
            
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome da tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={e => setTaskName(e)}
                    value={TaskName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <Text style={styles.create}>
                {`Criadas ${Task.length}`}
            </Text>
            <Text style={styles.finish}>
                {`Finalizadas ${list[0].cont}`}
            </Text>
            </View>
            <FlatList
                data={Task}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks key={item} name={item} onRemove={() => handleTaskRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View>
                    <Divider/>  
                    <Ionicons name="clipboard" color='gray' size={60} style={styles.Icon}/>
                    <Text style={styles.listEmptyText}>
                        Você ainda não tem tarefas cadastradas.
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                    </View>  
                )}
            />

        </View>
        </Contador.Provider>
    )
}