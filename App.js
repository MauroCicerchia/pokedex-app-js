import React from "react";
import { StyleSheet, Text, Platform, StatusBar, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="#f22" />
			<Text>Gotta catch'em all!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
