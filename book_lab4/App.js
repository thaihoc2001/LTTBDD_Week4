import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	const [quantity, setQuantity] = useState(1);

	return (
		<View style={styles.container}>
			<View style={styles.topComponent}>
				<View style={styles.row}>
					<View>
						<Image style={styles.imageBook} source={require('./assets/book.png')} />
						<Text style={[styles.title, { fontSize: 14, textAlign: 'center' }]}>Mã giảm giá đã lưu</Text>
					</View>
					<View style={styles.information}>
						<Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
						<Text style={styles.title}>Cung cấp bởi Tiki Trading</Text>
						<Text style={[styles.title, { color: 'red', fontSize: 20 }]}>141.800 đ</Text>
						<Text style={[styles.title, styles.discount]}>141.800 đ</Text>
						<View style={styles.quantity}>
							<TouchableOpacity
								style={stylesButton.btnSetQuantity}
								disabled={quantity === 1}
								onPress={() => setQuantity((prev) => prev - 1)}
							>
								<Text style={stylesButton.txtButton}>-</Text>
							</TouchableOpacity>
							<Text style={{ fontWeight: 'bold', marginHorizontal: 10 }}>{quantity}</Text>
							<TouchableOpacity style={stylesButton.btnSetQuantity} onPress={() => setQuantity((prev) => prev + 1)}>
								<Text style={stylesButton.txtButton}>+</Text>
							</TouchableOpacity>
							<Text style={{ marginLeft: 'auto', color: '#134FEC' }}>Mua sau</Text>
						</View>
						<Text style={{ marginTop: 10, color: '#134FEC' }}>Xem tại đây</Text>
					</View>
				</View>
				<View style={[styles.row, { marginLeft: 30 }]}>
					<TouchableOpacity style={stylesButton.btnDiscount}>
						<Text style={[stylesButton.txtButton, { backgroundColor: '#F2DD1B', minWidth: '10%' }]}></Text>
						<Text style={[stylesButton.txtButton, { marginLeft: 10, fontSize: 20, fontWeight: 'bold' }]}>Mã giảm giá</Text>
					</TouchableOpacity>
					<TouchableOpacity style={stylesButton.btnApplyDiscount}>
						<Text style={[stylesButton.txtButton, { color: 'white', fontSize: 20, fontWeight: 'bold' }]}>Áp dụng</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.centerComponent}>
				<Text style={styles.txtCenterComponent}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
				<Text style={[styles.txtCenterComponent, { marginLeft: 10, color: '#134FEC' }]}>Nhập tại đây?</Text>
			</View>
			<View style={styles.centerComponent}>
				<Text style={[styles.txtCenterComponent, { fontSize: 20 }]}>Tạm tính</Text>
				<Text style={[styles.txtCenterComponent, { fontSize: 20, marginLeft: 'auto', color: 'red' }]}>141.800 đ</Text>
			</View>
			<View style={styles.bottomComponent}>
				<View style={styles.txtBottom}>
					<Text style={[styles.txtCenterComponent, { fontSize: 20, color: '#808080' }]}>Thành tiền</Text>
					<Text style={[styles.txtCenterComponent, { fontSize: 20, marginLeft: 'auto', color: 'red' }]}>141.800 đ</Text>
				</View>
				<TouchableOpacity style={[stylesButton.btnBuy, { marginTop: 5 }]}>
					<Text style={[stylesButton.txtButton, { color: 'white', fontSize: 20, fontWeight: 'bold' }]}>TIẾN HÀNH ĐẶT HÀNG</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: '#C4C4C4',
	},
	topComponent: {
		backgroundColor: 'white',
	},
	centerComponent: {
		backgroundColor: 'white',
		marginTop: 20,
		padding: 20,
		flexDirection: 'row',
	},
	bottomComponent: {
		backgroundColor: 'white',
		marginTop: 'auto',

		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	txtBottom: {
		flexDirection: 'row',
		padding: 20,
	},
	txtCenterComponent: {
		fontWeight: 'bold',
		fontSize: 15,
	},
	imageBook: {
		margin: 10,
	},
	information: {
		padding: 10,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 15,
		marginBottom: 8,
	},
	row: {
		flexDirection: 'row',
		margin: 20,
	},
	discount: {
		color: '#808080',
		fontSize: 15,
		textDecorationLine: 'line-through',
	},
	quantity: {
		flexDirection: 'row',
	},
});

const stylesButton = StyleSheet.create({
	btnSetQuantity: {
		backgroundColor: '#C4C4C4',
		padding: 5,
		paddingHorizontal: 5,
		paddingVertical: 1,
		minWidth: '10%',
		textAlign: 'center',
	},
	txtButton: {
		textAlign: 'center',
	},
	btnDiscount: {
		flexDirection: 'row',
		backgroundColor: '#E5393500',
		paddingVertical: 15,
		paddingHorizontal: 20,
		minWidth: '50%',
		borderRadius: 2,
		borderWidth: 1,
		borderColor: '#808080',
		borderStyle: 'solid',
		textAlign: 'center',
	},
	btnApplyDiscount: {
		alignSelf: 'flex-end',
		textAlign: 'center',
		borderRadius: 2,
		backgroundColor: '#0A5EB7',
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginLeft: 'auto',
	},
	btnBuy: {
		textAlign: 'center',
		borderRadius: 2,
		backgroundColor: '#E53935',
		paddingVertical: 15,
		paddingHorizontal: 10,
		margin: 20,
	},
});
