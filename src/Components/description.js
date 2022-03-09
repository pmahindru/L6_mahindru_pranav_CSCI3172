import React from 'react';
import './description.css'

function Description(props){
    // taking the blog id and checking if it is same then return otherwise return There is no description for the this blog
    if (props.blogid === 1) {
        return (
            <p id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        )
    }
    else if(props.blogid === 2){
        return(
            <p  id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 3){
        return(
            <p  id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 4){
        return(
            <p id={props.blogid}> 
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 5){
        return(
            <p id={props.blogid}> 
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 6){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 7){
        return(
            <p id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 8){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 9){
        return(
            <p id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 10){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 11){
        return(
            <p id={props.blogid}> 
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 12){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 13){
        return(
            <p id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 14){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    else if(props.blogid === 15){
        return(
            <p id={props.blogid}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, enim at dignissim egestas, arcu erat facilisis orci, ac suscipit augue dui vel sem. Maecenas consectetur vitae tortor vel semper. 
                Nulla suscipit a ante ac finibus. Nullam porta accumsan elit eget auctor. Quisque ligula risus, iaculis vitae ligula nec, feugiat dictum elit. Vivamus purus nibh, auctor id urna et, convallis accumsan mi. Ut a metus ligula. Fusce in scelerisque sapien.
                Duis pulvinar accumsan nulla, in posuere dui pellentesque eu. Donec rutrum, mauris at dapibus rhoncus, nulla metus mattis mauris, posuere varius velit leo eu elit. Nullam luctus lacus velit. Sed posuere mi lectus, et rhoncus urna ultrices eget. In tincidunt pulvinar augue.
    
                Sed felis sapien, lacinia eu quam sit amet, lacinia dapibus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula justo, sagittis vel nibh vel, rhoncus dapibus lectus. Suspendisse feugiat, tellus sit amet cursus tempor, eros ante placerat orci, non pellentesque orci est vitae justo. 
                Maecenas ut elit faucibus, porttitor diam vel, sodales tortor. Nunc venenatis sagittis purus et feugiat. Proin porttitor metus sed vestibulum congue. Proin porttitor, ex eget lobortis mattis, erat eros aliquet sem, ut maximus nisl odio sit amet diam. 
                Donec ornare, quam nec auctor elementum, ligula nisl volutpat mauris, laoreet ultrices sapien nisi in libero. Nulla sed aliquet est, vitae hendrerit enim. Proin elementum elit sit amet ex accumsan, sed posuere eros consectetur. Donec porta ipsum vitae quam molestie auctor. Curabitur a consequat nisi.
    
                In vel porta metus. Vivamus placerat, dui ac pellentesque accumsan, augue tellus ultrices lorem, vel vulputate est nunc a enim. Morbi sit amet magna ut orci facilisis tristique et at ligula. Aliquam a ligula congue, tempor sapien quis, auctor mauris. Cras non fringilla erat. 
                Quisque neque orci, fermentum non dapibus ut, convallis quis est. In hac habitasse platea dictumst.
                Pellentesque a nibh odio. Donec ut mi id risus mattis rhoncus vel ac enim.
            </p>
        );
    }
    else if(props.blogid === 16){
        return(
            <p id={props.blogid}> 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sagittis in nibh eget porta. Maecenas euismod maximus est. Morbi sollicitudin aliquam eros, a rutrum lacus commodo non. 
                Aenean efficitur porta ipsum, eu cursus erat elementum vitae. 
                Donec mattis magna nec leo scelerisque fermentum. In fermentum turpis sed placerat faucibus. 
                Duis vel luctus mauris. Curabitur finibus tristique feugiat. In metus libero, blandit eu tempor a, porta a metus. 
                Quisque magna nulla, facilisis ut diam non, convallis imperdiet diam. Nunc blandit fringilla vestibulum. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent enim orci, dapibus a nibh a, cursus gravida lectus. 
                Curabitur non rhoncus sem, eu posuere nisi. Curabitur at purus faucibus, suscipit augue eget, imperdiet elit. Fusce vel pretium ligula, in molestie ipsum. Proin volutpat nisi quis ipsum tempus, molestie maximus erat efficitur. Nulla vel nulla vel dui finibus tristique ac eu massa. 
                Cras ut magna tristique, pulvinar massa et, faucibus sapien.

                Nulla ac diam mollis, pharetra orci eu, venenatis nunc. Integer orci quam, porttitor ut pharetra at, suscipit quis dolor. Pellentesque eget dolor at leo ultricies laoreet ut non sem. Proin congue mattis odio hendrerit laoreet. Donec vel accumsan sem. 
                Cras tempor massa molestie neque accumsan blandit. Mauris eget justo ullamcorper, pharetra nunc non, condimentum magna. Etiam eu neque id neque consectetur malesuada. Quisque rutrum hendrerit tellus, quis eleifend eros. Pellentesque pulvinar dignissim neque, eget luctus lorem sollicitudin sit amet. 
                Duis varius enim et dolor ultricies vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis mauris nisi. Etiam eget enim quis leo placerat viverra in quis nunc. Aliquam ultricies at ipsum at semper.
            </p>
        );
    }
    return <p id={props.blogid}>  "There is no description for the this blog :)" </p>;
}

export default Description;