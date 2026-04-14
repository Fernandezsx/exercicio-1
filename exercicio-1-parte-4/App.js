import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Keyboard 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones padrão do Expo

export default function App() {
  // PASSO 1: Estado para a lista de tarefas
  const [tarefas, setTarefas] = useState([
    { id: '1', texto: 'Estudar React Native' }
  ]);

  // PASSO 2: Estado para o texto do input
  const [novaTarefa, setNovaTarefa] = useState('');

  // PASSO 4: Função para adicionar tarefa
  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return; // Evita adicionar tarefas vazias

    const item = {
      id: String(Date.now()), // Gera um ID único baseado no timestamp
      texto: novaTarefa
    };

    setTarefas([...tarefas, item]); // Adiciona ao array existente
    setNovaTarefa(''); // Limpa o input
    Keyboard.dismiss(); // Fecha o teclado
  }

  // DESAFIO INTERMEDIÁRIO: Função para remover tarefa
  function removerTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* PASSO 3: Interface de Input e Botão */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Ionicons name="add" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* PASSO 5: Lista com FlatList */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemTarefa}>
            <Text style={styles.textoTarefa}>{item.texto}</Text>
            
            {/* Botão de Lixeira */}
            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Ionicons name="trash-outline" size={24} color="#FF5252" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  botaoAdicionar: {
    width: 50,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  itemTarefa: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  textoTarefa: {
    fontSize: 16,
    color: '#444',
  }
});