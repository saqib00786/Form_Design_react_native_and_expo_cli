import { useState } from "react";
import { StyleSheet, View, TextInput, Linking, Image } from "react-native";
import { Button, CheckBox } from "react-native-elements";
const Form = () => {
    const [isChecked, setChecked] = useState(false)

    return (
        <View style={{
            flex: 2, backgroundColor: "#d2691e", padding: 24,
        }}>
            <View style={{
                flex: 1,
                alignItems: 'center', justifyContent: 'center'
            }}>

                <View>
                   <Image
                   uri = 'assets:/'
                   style={{width:40,height:40}}
                   />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={[sheet.viewContainer.fistViewcontainer, { paddingEnd: 8 }]}>
                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor="white"
                            style={[sheet.inputText]}
                        />
                    </View>
                    <View style={[sheet.viewContainer.fistViewcontainer]}>
                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor="white"
                            style={[sheet.inputText]} />
                    </View>
                </View>


                <View style={[sheet.viewContainer.secondViewContainer]}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="white"
                        style={[sheet.inputText]} />
                </View>

                <View style={[sheet.viewContainer.secondViewContainer]}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        style={[sheet.inputText]} />
                </View>
                <View style={[sheet.viewContainer.secondViewContainer]}>
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        style={[sheet.inputText]} />
                </View>
                <View>
                    <CheckBox
                        title='I accept the Terms of Use & Privacy Policy'
                        checked={isChecked}
                        onPress={() => setChecked(!isChecked)}
                        checkedColor="white"
                        containerStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: "white", fontSize: 12 }}

                    />
                </View>

            </View>

            <View style={{ width: '100%' }}>
                <Button
                    title="Sign Up"
                    type="solid"
                    buttonStyle={{ borderRadius: 8, backgroundColor: '#00c04b' }}
                />
            </View>
        </View>

    )
}

const sheet = StyleSheet.create({
    inputText: {
        width: "100%",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        height: 50,
        color: "white",
        paddingStart: 8
    },

    viewContainer: {
        fistViewcontainer: {
            width: "50%", paddingBottom: 12
        },
        secondViewContainer: {
            width: "100%", paddingBottom: 12
        }
    },
});

export default Form