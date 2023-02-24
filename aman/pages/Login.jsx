import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'





const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    

    return (
        <View style={styles.container}>
                {/* <Image source={m} style={{ 
                width: 350,
                height: 350,
                }} /> */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                onChangeText={(email) => setEmail(email)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity
                onPress={() => loginUser(email, password)}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={styles.footerLink}>Sign up</Text></Text>
                {/* <Text
                    onPress={() => onResetPasswordPress()} style={styles.footerLink}>Forgot Password?</Text> */}
            </View>
        </View>
    )
}


// const onLoginPress = () => {
//     setLoading(true)
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .get()
//                 .then(firestoreDocument => {
//                     if (!firestoreDocument.exists) {
//                         alert("User does not exist anymore.")
//                         return;
//                     }
//                     const user = firestoreDocument.data()
//                     navigation.navigate('Dashboard', {user})
//                 })
//                 .catch(error => {
//                     alert(error)
//                 });
//         })
//         .catch(error => {
//             alert(error)
//         })
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: 300,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F0F0F0',
        marginBottom: 10,
        padding: 15,
    },
    button: {
        backgroundColor: '#112B54',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'black'
    },
    footerLink: {
        color: "#112B54",
        fontWeight: "bold",
        fontSize: 16,
        shadowColor: '#000',
        elevation: 50,

    }
})

export default Login

