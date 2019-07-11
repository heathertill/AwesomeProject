import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Font } from 'expo';

interface IHomeProps { }
interface IHomeState { }

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            fontLoaded: false,
            message: 'Your message...'
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Barriecito-Regular': require('./assets/fonts/Barriecito-Regular.ttf')
        });
        this.setState({ fontLoaded: true });
    }

    newMessage() {
        return <Text>Hello!!</Text>
    }

    render() {
        return (
            <View style={styles.nextLayer}>
                <View style={styles.newView}>
                    <View style={styles.container}>
                        {this.state.fontLoaded ? (
                            <Text style={styles.textStyle} >#crushingit</Text>
                        ) : (<ActivityIndicator size="large" />)
                        }
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(message) => this.setState({ message })}
                            value={this.state.message}
                        />
                        <Button
                            onPress={() => { Alert.alert(this.state.message) }}
                            title="Touch Here"
                            color="black"
                            accessibilityLabel="Learn more about this button"
                        />
                    </View>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 40,
        backgroundColor: 'red',
        fontFamily: 'Barriecito-Regular',
        color: 'white',
        padding: 20,
        margin: 20
    },
    newView: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20
    },
    nextLayer: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20
    },
    textInput: {
        width: 200,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'white',
        padding: 10
    }
});


export interface AppProps { }

export interface AppState {
    fontLoaded: boolean,
    message: string
}

export default App;

