import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScreenContext } from '../context';

export default function Screen2() {
	const screenContext = useContext(ScreenContext);
	const phones = screenContext.phones;
	const setCurrentPhone = screenContext.setCurrentPhone;
	const currentPhone = screenContext.currentPhone;
	const setScreen = screenContext.setScreen;

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Image style={{ marginLeft: 20, marginTop: 50, width: 120, height: 150 }} source={currentPhone.img} />
				<Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
			</View>
			<View>
				<Text style={{ fontSize: 15, margin: 10, color: 'black' }}>Chọn một màu bên dưới:</Text>
			</View>
			<View style={{ alignItems: 'center', marginTop: 40 }}>
				{phones.map((phone, index) => {
					return (
						<TouchableOpacity
							key={index}
							style={[styles.button, styles.shadow, { backgroundColor: phone.color }]}
							onPress={() => {
								setCurrentPhone(phone);
							}}
						></TouchableOpacity>
					);
				})}
			</View>
			<TouchableOpacity style={[styles.bottom]} onPress={() => setScreen(0)}>
				<Text style={[styles.txtButton, { color: 'white' }]}>CHỌN MUA</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C4C4C4',
	},
	title: {
		marginTop: 40,
		fontSize: 15,
		fontWeight: 'bold',
		padding: 20,
		flexShrink: 1,
	},
	row: {
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	button: {
		padding: 10,
		textAlign: 'center',
		margin: 10,
		backgroundColor: '#F2DD1B',
		minWidth: '25%',
		minHeight: '8%',
	},
	txtButton: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '600',
	},
	bottom: {
		position: 'absolute',
		bottom: 0,
		width: '90%',
		alignSelf: 'center',
		backgroundColor: '#1952E294',
		padding: 10,
		margin: 10,
		borderRadius: 14,
		borderStyle: 'solid',
		textAlign: 'center',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
});
