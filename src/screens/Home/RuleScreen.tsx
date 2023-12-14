import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header';
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../../themes/theme';
import { IC_BACK } from '../../../assets';
import Button from '../../components/button/Button';
type PropsType = NativeStackScreenProps<ProfileStackParamList, 'RuleScreen'>;

const RuleScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <ScrollView style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                isCheck={true}
                textCenter="Điều khoản và chính sách"
                iconLeft={IC_BACK}
            />
            <View style={{ paddingHorizontal: 25, paddingVertical: 18 }}>
                <Text style={styles.title}>1. Điều khoản sử dụng:</Text>
                <Text style={styles.content}>Định rõ quyền và trách nhiệm của người dùng khi sử dụng ứng dụng của bạn.
                    {"\n"}Bao gồm các điều kiện về việc đặt phòng, thanh toán, hủy đặt, chính sách hoàn tiền và các quy định khác liên quan đến việc sử dụng ứng dụng.</Text>
                <Text style={styles.title}>2. Chính sách bảo mật:</Text>
                <Text style={styles.content}>Mô tả cách ứng dụng của bạn thu thập, sử dụng và bảo vệ thông tin cá nhân của người dùng.
                    {"\n"}Đảm bảo tuân thủ các quy định bảo vệ dữ liệu cá nhân như GDPR hoặc CCPA (tùy theo phạm vi hoạt động của ứng dụng của bạn).</Text>
                <Text style={styles.title}>3. Chính sách thanh toán:</Text>
                <Text style={styles.content}>Đảm bảo rằng quy trình thanh toán an toàn và bảo mật.
                    {"\n"}Liệt kê các phương thức thanh toán được chấp nhận và mô tả quy trình xử lý thanh toán.</Text>
                <Text style={styles.title}>4. Chính sách hủy đặt và hoàn tiền:</Text>
                <Text style={styles.content}>Đưa ra quy định về việc hủy đặt phòng và chính sách hoàn tiền.
                    {"\n"}Mô tả các điều kiện và khoản phí áp dụng cho việc hủy đặt.</Text>
                <Text style={styles.title}>5. Quản lý tranh chấp: </Text>
                <Text style={styles.content}>Đưa ra quy trình giải quyết tranh chấp giữa người dùng và nhà cung cấp dịch vụ khách sạn.
                    {"\n"}Mô tả quy trình khiếu nại và giải quyết tranh chấp, bao gồm cách liên hệ với đội ngũ hỗ trợ của bạn.</Text>
                <Text style={styles.title}>6. Điều khoản bổ sung:</Text>
                <Text style={styles.content}>Bao gồm các điều khoản bổ sung khác liên quan đến việc sử dụng ứng dụng của bạn, chẳng hạn như quyền sở hữu trí tuệ, giới hạn trách nhiệm, bất khả kháng và quyền áp dụng pháp luật.</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Button
                    title='Đã hiểu'
                    onPress={() => navigation.navigate('ProfileScreen')}
                />
            </View>

        </ScrollView>
    )
}

export default RuleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontFamily: 'Exo2-SemiBold',
        color: COLORS.Black,
        marginBottom: 4,
        fontSize: 18
    },
    content: {
        fontFamily: 'Exo2-Regular',
        color: COLORS.Black,
        marginBottom: 3,
        // textAlign: 'justify',
        fontSize: 15
    }
})