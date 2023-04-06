import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {getProductsByCategory} from '../utils/api'
import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';


const ProductbyCategory = ({route}) => {
    const {category_id} = route.params;
    const [product, setProduct] = useState(null);
    const navigation = useNavigation();

    const {data, isLoading, error} = useQuery(
        'product',
        () => getProductsByCategory(category_id),
        {
            onSuccess: data => {
                setProduct(data);
                console.log(data)
            },
        },
    );
        
    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error: {error.message}</Text>;

    }



  return (
    <ScrollView
        style={{
            flex: 1,
            backgroundColor: '#FFF',
        }}
        showsVerticalScrollIndicator={false}>
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginHorizontal: 10,
            }}>
            {product.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.navigate('ProductDetail', {
                                param: {product_id: item._id},
                            })
                        }
                        style={{
                            width: '48%',
                            backgroundColor: '#FFF',
                            borderRadius: 10,
                            elevation: 2,
                            marginBottom: 20,
                        }}>
                        <Image
                            source={{uri: item.image}}
                            style={{
                                width: '100%',
                                height: 150,
                                borderRadius: 10,
                            }}
                        />
                        <View
                            style={{
                                padding: 10,
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000',
                                }}>
                                {item.name}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#000',
                                }}>
                                {item.price}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            }
            )}
        </View>
    </ScrollView>
    
  )
}

export default ProductbyCategory