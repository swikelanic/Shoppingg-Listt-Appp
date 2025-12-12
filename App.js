import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { store, persistor } from './src/store';
import ShoppingList from './src/components/ShoppingList';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <SafeAreaView style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </SafeAreaView>
        }
        persistor={persistor}
      >
        {/* SafeAreaView container */}
        <SafeAreaView style={styles.container}>
          <ShoppingList />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // App background
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
