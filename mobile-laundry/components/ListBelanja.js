import { useCallback, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert, ScrollView, RefreshControl } from "react-native";

const FAKE_BELANJAAN = [
    {
        id: 1,
        nama: "Sayur 01"
    },
    {
        id: 2,
        nama: "Sayur 02"
    },
    {
        id: 3,
        nama: "Sayur 03"
    },
    {
        id: 4,
        nama: "Sayur 04"
    },
]

const ListBelanja = () => {
    const [daftarBelanja] = useState(FAKE_BELANJAAN);
    const [carts, setCarts] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        console.log("refresh")
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    const showInfo = (nama) => {
        Alert.alert(nama)
    }

    const addToCart = (item) => {
        let newCarts = [...carts, item]
        setCarts(newCarts)
    }

    return ( 
        <View style={styles.container}>
            <ScrollView style={styles.sv}>
                {daftarBelanja.map((value, index) => {
                    return(
                        <TouchableOpacity 
                            style={styles.item} 
                            key={index} 
                            onPress={() => {
                            addToCart(value)
                        }}>
                            <Text>{value.nama}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                onScrollEndDrag={() => console.log("onSCrollEndDrag")}>
                {carts.map((value, index) => {
                    return(
                        <TouchableOpacity 
                            style={styles.carts} 
                            key={value.id} 
                            onPress={() => {
                            showInfo(value.nama)
                        }}>
                            <Text>{value.nama}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        gap: 20,
    },
    sv: {
        flexGrow: 2,
        height: 200
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "tomato"
    },
    carts: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "green"
    }
})
 
export default ListBelanja;