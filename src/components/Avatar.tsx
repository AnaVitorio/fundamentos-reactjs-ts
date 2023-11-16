import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar(props: AvatarProps){
    return(
        <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={props.src}
            
        />
    )
}

//Outra maneira de passar as propriedades

// export function Avatar({hasBorder = true, ...props}: AvatarProps){
//     return(
//         <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
//             src={props.src}
//             {...props}
//         />
//     )
// }
