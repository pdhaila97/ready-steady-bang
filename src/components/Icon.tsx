import React from 'react';


interface IIconProps {
    item: any;
    fontSize?: string;
    color?: string;
}
function Icon(props: IIconProps) {
    const IconComponent = props.item;

    return <IconComponent {...props}/>
}

export default Icon;