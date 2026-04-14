import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const diminuir = () => {
    if (contador > 0) {   // ✅ Não deixa ficar negativo
      setContador(contador - 1);
    }
  };

  const resetar = () => setContador(0);
  const aumentar = () => setContador(contador + 1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F9" />

      <Text style={styles.title}>Contador de Tarefas</Text>

      <View style={styles.card}>
        <Text style={styles.number}>{contador}</Text>
        <Text style={styles.subtitle}>tarefas concluídas</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.btnRed]} onPress={diminuir} activeOpacity={0.8}>
          <Text style={styles.btnSymbol}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnBlue]} onPress={resetar} activeOpacity={0.8}>
          <Text style={styles.btnText}>RESET</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnGreen]} onPress={aumentar} activeOpacity={0.8}>
          <Text style={styles.btnSymbol}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Você completou {contador} tarefa{contador !== 1 ? 's' : ''} hoje!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A335B',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    paddingVertical: 50,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  number: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#3273D1',
    lineHeight: 110,
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  btnRed: {
    backgroundColor: '#EF5348',
    width: 65, height: 65, borderRadius: 32.5,
  },
  btnBlue: {
    backgroundColor: '#3B7CE1',
    width: 85, height: 85, borderRadius: 42.5,
  },
  btnGreen: {
    backgroundColor: '#52BA67',
    width: 65, height: 65, borderRadius: 32.5,
  },
  btnSymbol: {
    color: '#FFF', fontSize: 32, fontWeight: 'bold', marginTop: -3,
  },
  btnText: {
    color: '#FFF', fontSize: 16, fontWeight: 'bold',
  },
  footerText: {
    fontSize: 16, color: '#777',
  },
});