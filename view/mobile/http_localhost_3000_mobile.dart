
    import 'package:flutter/material.dart';
    import 'package:fl_responsive/fl_responsive.dart';
    
    import 'http_localhost_3000_mobile_landscape.dart';
    import 'http_localhost_3000_mobile_portrait.dart';
    
    class HttpLocalhost_3000Mobile extends StatelessWidget {
      const HttpLocalhost_3000Mobile({Key key}) : super(key: key);
    
      @override
      Widget build(BuildContext context) => OrientationLayout(
            portrait: HttpLocalhost_3000MobilePortrait(),
            landscape: HttpLocalhost_3000MobileLandscape(),
          );
    }
    