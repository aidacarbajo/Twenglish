import React from 'react';
import BubbleTabBar, {
} from 'react-native-bubble-tabbar';
import { icons, menus, secundary } from '../../assets/theme/styles';
  
import Icon from '../Icons/Icon';

const tabs = [
    {
        activeColor: secundary,
        activeBackgroundColor: '#FEE3E8',
        activeIcon: "lessons",
    },
    {
        activeColor: secundary,
        activeBackgroundColor: '#FEE3E8',
        activeIcon: "calendar",
    },
];

const iconRender = ({ icon }) =>
    <Icon icon={icon} color={icons.menu.color} size={icons.sm} style={{fontSize: 14}}/>;

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