import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "black",
    },
    miniHeader: {
        backgroundColor: '#192436',
    },
    textMiniHeader: {
        color: '#434b5e',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#222b34'
    },
    profileLeft: {
        flexDirection: 'row'
    },
    profileRight: {
        marginRight: 10
    },

    profileTextContainer: {
        marginLeft: 10
    },
    profileImage: {
        width: 50,
        height: 50,
        borderColor: '#9fb7d9',
        borderWidth: 3
    },
    profileTitle: {
        color: '#9fb7d9',
        fontSize: 24
    },
    profileSubTitle: {
        color: '#9fb7d9',
        fontSize: 16
    },
    profileImageGaming: {
        width: 50,
        height: 50,
        borderColor: '#5d7b35',
        borderWidth: 3,
    },
    profileTitleGaming: {
        color: '#5d7b35',
        fontSize: 24,
    },
    profileSubTitleGaming: {
        color: '#5d7b35',
        fontSize: 16,
    },
    profileImageOffline: {
        width: 50,
        height: 50,
        borderColor: '#c8cfd5',
        borderWidth: 3,
    },
    profileTitleOffline: {
        color: '#c8cfd5',
        fontSize: 24,
    },
    profileSubTitleOffline: {
        color: '#c8cfd5',
        fontSize: 16,
    },
    notificationNumber: {
        position: 'absolute',
        marginLeft: 29,
        marginTop: 5,
        color: 'black'
    },
    chatIcon: {
        fontSize: 50,
        color: '#CCC'
    },
    chatIconNew: {
        fontSize: 50,
        color: '#FFF'
    },
    cellphoneIcon: {
        fontSize: 20,
        color: '#9fb7d9'
    },
})