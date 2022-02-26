import React, {useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../Card/cardStyle';
import {ShowhideCard} from 'Molecules'
import * as resources from 'resources';

const Card = (props) => {
    const [isVisible, setIsVisible]= React.useState(true)
    const [cardNum, setCardNum]= React.useState(props.cardNo)
	const { cardNo, title, cardDate, cardCvv, imageSource, imageSource2} = props;

    const hideShowCardNumber = () =>{
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        if(isVisible){
            setCardNum(cardNo)
        }else{
            let character = '';
            let number = 
            number = cardNum.replace(/ /g, ""); 
            character = number.slice(-4);
            let countNum = '';

            for(var i = 1; i <= (number.length) - 4; i++){
                if(i % 4 == 0){
                    countNum += '*  ';
                }else{
                    countNum += '*';
                }
                
            }
            setCardNum(countNum+character)
        }  
     }, [isVisible]);

    return (
        <View style={[styles.container]}>
            <ShowhideCard 
			title = {isVisible?'Hide card number':'Show card number'}
			imageSource = {isVisible?resources.show:resources.hide}
            onPress={()=>{hideShowCardNumber()}}
            style={styles.showhideButton}
			/>
       
        <View style={[styles.cardContainer]}>
                <View style = {styles.cardLogoContainer}>
                <Image source={imageSource} style = {styles.LogoStyle}  />
                </View>
                <View style = {styles.detailStyle}>
                    <Text style={[styles.nameText]}>{title}</Text>
                    <Text style={[styles.NumberText]}>{cardNum}</Text>
            <View style={[styles.txtContainer]}>
                <Text style={[styles.dateText]}>{cardDate}</Text>
                <Text style={[styles.cvvText]}>{"CVV:"}</Text>
                { isVisible? 
                    <Text style={[styles.cvvText]}>{cardCvv}</Text> :
                    <Text style={[styles.cvvText]}>{"* * *"}</Text>
                }
            </View>
            </View>
            <View style = {styles.cardLogoContainer2}>
                <Image source={imageSource2} style = {styles.LogoStyle2}  />
                </View>
        </View>
        </View>
    )
}

export default Card