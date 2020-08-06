import React from 'react';
import { ScrollView, TouchableNativeFeedback, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import TiagoPhoto from '../../../assets/tiago.jpg'
import Style from './style';

export default function Friends() {
    return (
        <ScrollView style={Style.container}>
            <View style={Style.miniHeader}>
                <Text style={Style.textMiniHeader}>RECENT CHATS</Text>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

            <View style={Style.miniHeader}>
                <Text style={Style.textMiniHeader}>IN-GAME</Text>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImageGaming}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitleGaming}>Dreamy</Text>
                        <Text style={Style.profileSubTitleGaming}>Playing CS:GO</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImageGaming}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitleGaming}>Dreamy</Text>
                        <Text style={Style.profileSubTitleGaming}>Playing CS:GO</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.miniHeader}>
                <Text style={Style.textMiniHeader}>ONLINE</Text>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImage}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitle}>Dreamy</Text>
                        <Text style={Style.profileSubTitle}>Online</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.miniHeader}>
                <Text style={Style.textMiniHeader}>OFFLINE</Text>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImageOffline}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitleOffline}>Dreamy</Text>
                        <Text style={Style.profileSubTitleOffline}>Last Online: 22 hours ago</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImageOffline}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitleOffline}>Dreamy</Text>
                        <Text style={Style.profileSubTitleOffline}>Last Online: 22 hours ago</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <View style={Style.profileContainer}>
                <View style={Style.profileLeft}>
                    <Image
                        source={TiagoPhoto}
                        style={Style.profileImageOffline}
                    />
                    <View style={Style.profileTextContainer}>
                        <Text style={Style.profileTitleOffline}>Dreamy</Text>
                        <Text style={Style.profileSubTitleOffline}>Last Online: 22 hours ago</Text>
                    </View>
                </View>
                <View style={Style.profileRight}>
                    <TouchableNativeFeedback>
                        <View>
                            <Icon
                                name="chat"
                                style={Style.chatIcon}

                            />
                            <Text style={Style.notificationNumber}>1</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </ScrollView>

    );
}