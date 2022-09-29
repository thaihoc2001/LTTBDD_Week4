import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScreenContext } from '../context';

export default function Screen1() {
	const screenContext = useContext(ScreenContext);
	const setScreen = screenContext.setScreen;
	const currentPhone = screenContext.currentPhone;

	return (
		<View style={styles.container}>
			<Image style={{ marginTop: 50, alignSelf: 'center', width: 250, height: 320 }} source={currentPhone.img} />
			<Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

			<View style={styles.row}>
				<Rating type="custom" ratingCount={5} imageSize={30} startingValue={5} style={{ marginTop: 20 }} />
				<Text style={{ marginTop: 30, marginLeft: 20 }}>(Xem 828 đánh giá)</Text>
			</View>
			<View style={styles.row}>
				<Text style={[styles.title, { marginTop: 30, fontSize: 20 }]}>1.790.000 đ</Text>
				<Text style={styles.linePrice}>1.790.000 đ</Text>
			</View>
			<View style={styles.row}>
				<Text style={[styles.title, { fontSize: 15, color: 'red' }]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
				<FontAwesome name="question-circle" style={{ marginTop: 10, marginLeft: 10 }} size={30} />
			</View>
			<TouchableOpacity style={styles.button} onPress={() => setScreen(1)}>
				<Text style={styles.txtButton}>4 MÀU-CHỌN MÀU</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, styles.bottom]}>
				<Text style={[styles.txtButton, { color: 'white' }]}>CHỌN MUA</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 30,
	},
	title: {
		marginTop: 20,
		fontSize: 16,
		fontWeight: 'bold',
	},
	row: {
		flexDirection: 'row',
	},
	linePrice: {
		marginTop: 30,
		marginLeft: 20,
		fontSize: 17,
		color: '#00000094',
		textDecorationLine: 'line-through',
	},
	button: {
		backgroundColor: '#E5393500',
		padding: 10,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#808080',
		borderStyle: 'solid',
		textAlign: 'center',
		margin: 10,
	},
	txtButton: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
	},
	bottom: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		alignSelf: 'center',
		backgroundColor: '#EE0A0A',
		borderColor: '#CA1536',
	},
});
