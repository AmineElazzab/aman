import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TaP = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#112B54',
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          {' '}
          Terms and Policy{' '}
        </Text>
        <View />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="information-circle-outline"
            size={100}
            color="#112B54"
            style={{marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            Terms and Policy
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            These Terms of Use apply to the App and to all of its divisions,
            subsidiaries and affiliate websites to which these Terms and
            Conditions are referenced.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            1. Terms
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            By accessing the App, you are agreeing to be bound by these Terms of
            Use, all applicable laws and regulations, and agree that you are
            responsible for compliance with any applicable local laws. If you do
            not agree with any of these terms, you are prohibited from using or
            accessing this App. The materials contained in this App are
            protected by applicable copyright and trademark law.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
            <View
          style={{
           alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            2. Use License
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on App's website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'left',
              color: '#000',
            }}>
            1. modify or copy the materials;
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'left',
              color: '#000',
            }}>
            2. use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'left',
              color: '#000',
            }}>
            3. attempt to decompile or reverse engineer any software contained
            on App's website;
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'left',
              color: '#000',
            }}>
            4. remove any copyright or other proprietary notations from the
            materials; or
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'left',
              color: '#000',
            }}>
            5. transfer the materials to another person or "mirror" the
            materials on any other server.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by App at any time. Upon
            terminating your viewing of these materials or upon the termination
            of this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            3. Disclaimer
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            The materials on App's website are provided on an 'as is' basis. App
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            Further, App does not warrant or make any representations concerning
            the accuracy, likely results, or reliability of the use of the
            materials on its website or otherwise relating to such materials or
            on any sites linked to this site.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            4. Limitations
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            In no event shall App or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on App's website, even if App or a App
            authorized representative has been notified orally or in writing of
            the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability
            for consequential or incidental damages, these limitations may not
            apply to you.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            5. Accuracy of materials
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            The materials appearing on App's website could include technical,
            typographical, or photographic errors. App does not warrant that any
            of the materials on its website are accurate, complete or current.
            App may make changes to the materials contained on its website at
            any time without notice. However App does not make any commitment to
            update the materials.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            6. Links
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            App has not reviewed all of the sites linked to its website and is
            not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by App of the site.
            Use of any such linked website is at the user's own risk.
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default TaP;
