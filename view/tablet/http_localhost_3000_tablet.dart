
    import 'package:flutter/material.dart';
    import 'package:fl_responsive/fl_responsive.dart';
    
    import 'http_localhost_3000_tablet_landscape.dart';
    import 'http_localhost_3000_tablet_portrait.dart';
    
    class HttpLocalhost_3000Tablet extends StatelessWidget {
      const HttpLocalhost_3000Tablet({Key key}) : super(key: key);
    
      @override
      Widget build(BuildContext context) => OrientationLayout(
            portrait: HttpLocalhost_3000TabletPortrait(),
            landscape: HttpLocalhost_3000TabletLandscape(),
          );
    }
    