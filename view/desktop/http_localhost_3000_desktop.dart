
    import 'package:flutter/material.dart';
    import 'package:fl_responsive/fl_responsive.dart';
    
    import 'http_localhost_3000_desktop_landscape.dart';
    import 'http_localhost_3000_desktop_portrait.dart';
    
    class HttpLocalhost_3000Desktop extends StatelessWidget {
      const HttpLocalhost_3000Desktop({Key key}) : super(key: key);
    
      @override
      Widget build(BuildContext context) => OrientationLayout(
            portrait: HttpLocalhost_3000DesktopPortrait(),
            landscape: HttpLocalhost_3000DesktopLandscape(),
          );
    }
    