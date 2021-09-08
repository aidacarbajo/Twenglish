// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import BubbleTabBar, {
//   IBubbleTabConfig,
//   IIconRenderer,
} from 'react-native-bubble-tabbar';
import { icons, menus, secundary } from '../../assets/theme/styles';
  
import Icon from '../Icons/Icon';


const tabs = [
    {
        activeColor: secundary,
        activeBackgroundColor: '#FEE3E8',
        activeIcon: "notes",
    },
    {
        activeColor: secundary,
        activeBackgroundColor: '#FEE3E8',
        activeIcon: "settings",
    },
    // {
    //     activeColor: secundary,
    //     activeBackgroundColor: '#FEE3E8',
    //     activeIcon: "tick",
    // },
    // {
    //     activeColor: secundary,
    //     activeBackgroundColor: '#FEE3E8',
    //     activeIcon: "info",
    // }
];

const iconRender = ({ icon }) =>
    <Icon icon={icon} color={icons.menu} size={icons.sm}/>;

    const TabMenu = ({state, descriptors, navigation}) => {
        return (
            <BubbleTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            tabs={tabs}
            iconRenderer={iconRender}
            style={menus.footer}
            />
        );
    };

export default TabMenu;