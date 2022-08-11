import { useState } from "react";
import { StyleSheet, View, TextInput, Image} from "react-native";
import { Button, CheckBox} from "react-native-elements";
import { ActivityIndicator } from "react-native";
const Form = () => {

    const [checked,setChecked] = useState(false)
    const [indicatorShow,setIndicator] = useState(false)


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
                        source={require("../images/account.png")}
                        style={{ width: 160, height: 160 }}

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
                        checkedColor="white"
                        checked = {checked}
                        onPress={()=>{ setChecked(!checked),setIndicator(false)}}
                        containerStyle={{ backgroundColor: 'transparent' }}
                        textStyle={{ color: "white", fontSize: 12 }}

                    />
                </View>

                <ActivityIndicator
                size='large'
                animating={indicatorShow}
                />

            </View>

            <View style={{ width: '100%' }}>
                <Button
                    title="Sign Up"
                    type="solid"
                    disabled={!checked}
                    buttonStyle={{ borderRadius: 8,
                        backgroundColor : checked ? "#00c04b" : 'gray',
                    }}
                    onPress={()=>{setIndicator(true)}}
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