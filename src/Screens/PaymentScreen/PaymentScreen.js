import React from "react";
import {View, Text,FlatList,Image} from 'react-native'
import styles from "./PaymentScreenStyle";
import {getAllProductsAction} from '../../Store/product'

import { NoRecord } from 'Atoms';
import {Header,ProductCard} from 'Molecules';
import { useSelector, useDispatch } from "react-redux";


const PaymentScreen = ({ navigation}) => {

	const [products, setproducts] =React.useState([]);
	const dispatch = useDispatch();
	const productData = useSelector((state) => state.product);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
			if(productData.products){
				setproducts(productData.products)
			}else{
				dispatch(getAllProductsAction())

			}
		});
		return unsubscribe;
	});



	  const renderItem = ({ item }) => {
		console.log('item',item)

		  return(

			  <ProductCard item={item}
			  price={item.price}
			  />
		  )
	  }
	  
	
	  return (
		  <>
			<Header title={'Product'} isHome   />
		<View style={styles.container}>
		  {products.length>0?
		  <FlatList
			data={products}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			numColumns = {2}
			columnWrapperStyle={styles.columnWrapperStyle}
			showsVerticalScrollIndicator={false}
		  />:
		  <NoRecord/>}
		</View>
		</>
	  );
}



export default PaymentScreen;
