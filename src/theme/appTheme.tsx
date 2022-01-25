import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    res: {
        color: 'white',
        fontSize: 60,
        fontWeight: '300',
        textAlign: 'right',
        marginBottom: 10
    },
    preRes: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    button: {
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        width: 80,
        marginHorizontal: 10,
    },
    textButton: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});