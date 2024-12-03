import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PantallaEvento = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri:'https://lh3.googleusercontent.com/XE2cp2mnVX1H1k8yX80VrnkYDJ4f53m2q9gflVkjdCeaOC75oAih0EEO5X4Xw_OGf1lRSg6rg1CfmA=w544-h544-p-l90-rj', 
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.userInfo}>Luis Lovo 12 hours ago</Text>
          <Text style={styles.title}>Bad Bunny en El Salvador</Text>
          <Text style={styles.description}>
            La gira del artista puertorriqueño lo ha llevado a diferentes ciudades de Latinoamérica, este sábado
            finalmente será el turno de nuestro país.
          </Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}></Text>
            <Text style={styles.detailText}>Estadio Cuscatlán</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}></Text>
            <Text style={styles.detailText}>Dom, 30 de Mar</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}></Text>
            <Text style={styles.detailText}>Tickets disponibles!</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 350,
  },
  image: {
    width: 400,
    height: 300,
  },
  infoContainer: {
    padding: 15,
  },
  userInfo: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 18,
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#444',
  },
});

export default PantallaEvento;
