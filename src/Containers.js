import React, {useEffect} from 'react';
import {SafeAreaView, BackHandler, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from './Navigation';
import {setCurrentRouteName} from './Store/global';
import {resetWeekLimitAction} from './Store/spending';
import {color} from './Constants/Color';
import moment from 'moment';

const Containers = ({}) => {
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);
  const spendingData = useSelector(state => state.spending);
  const [bgBarColor, setBgBarColor] = React.useState(color._WHITE);
  const [bgBarCotentColor, setBgBarCotentColor] = React.useState('dark-content');
  const [translucentMode, setTranslucentMode] = React.useState(false);
  const effectDependency = stateGlobal.currentRouteName;

  useEffect(() => {
    _checkWeek();
  }, []);
  useEffect(() => {
    _StatusBar();
  }, [effectDependency]);
  const _checkWeek = () => {
    const weekEndDate = spendingData.weekEndDate;
    const today = moment(new Date()).format('DD MMM YYYY');
    const isAfter = moment(weekEndDate).isBefore(today);
    if (weekEndDate) {
      if (isAfter) {
        dispatch(resetWeekLimitAction());
      }
    }
  };

  const _StatusBar = () => {
    if (
      stateGlobal.currentRouteName === 'MyTab' ||
      stateGlobal.currentRouteName === 'Home' ||
      stateGlobal.currentRouteName === 'Payment' ||
      stateGlobal.currentRouteName === 'card' ||
      stateGlobal.currentRouteName === 'Detail'
    ) {
      setBgBarColor(color._0C365A);
      setBgBarCotentColor('dark-content');
      setTranslucentMode(false);
    } else {
      setBgBarColor(color._WHITE);
      setBgBarCotentColor('dark-content');
      setTranslucentMode(false);
    }
  };

  const backHandlerListener = value => {
    if (stateGlobal.currentRouteName == 'MyTab') {
      return true;
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandlerListener);
      return false;
    }
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backHandlerListener);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandlerListener);
    };
  }, [backHandlerListener]);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={bgBarColor}
        barStyle={bgBarCotentColor}
        translucent={translucentMode}
      />
      <Navigation
        setCurrentRouteName={value => {
          dispatch(setCurrentRouteName(value));
        }}
      />
    </>
  );
};

export default Containers;

