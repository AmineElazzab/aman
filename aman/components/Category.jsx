import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../utils/api';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useQuery} from 'react-query';

const Category = () => {
  const navigation = useNavigation();

  //get category from api
  const {data, isLoading, error} = useQuery('categories', 
    getCategories,
    // console.log(categoryId)
  );

  // console.log(JSON.stringify(data, 2, null));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#112B54',
        borderRadius: 30,
        padding: 10,
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
          keyExtractor={item => `${item._id}-${item.index}`}
            onPress={() =>
              navigation.navigate('Nav', {
                screen: 'Shop',
                param: {categoryId: item._id},
              })
            }
            style={{
              marginTop: 10,
              backgroundColor: '#112B54',
              height: 40,
              width: 120,
              elevation: 2,
              borderRadius: 30,
              // padding: 15,
              marginRight: 10,
              marginLeft: 2,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                // marginTop: 100,
                fontWeight: 'bold',
                fontSize: 15,
                color: '#fff',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => `${item._id}-${item.index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
