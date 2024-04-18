
    import 'package:flutter/material.dart';
    import 'package:fl_responsive/fl_responsive.dart';
    import 'mobile/http_localhost_3000_mobile.dart';
    import 'tablet/http_localhost_3000_tablet.dart';
    import 'desktop/http_localhost_3000_desktop.dart';

    class HttpLocalhost_3000View extends StatelessWidget {
    const HttpLocalhost_3000View({Key key}) : super(key: key);

    @override
    Widget build(BuildContext context) => SafeArea(
            child: ScreenTypeLayout(
            mobile: HttpLocalhost_3000Mobile(),
            tablet: HttpLocalhost_3000Tablet(),
            desktop: HttpLocalhost_3000Desktop(),
            ),
        );
    }
    