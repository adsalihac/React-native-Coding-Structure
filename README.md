1 - Create new project

2 - Install common Packages

yarn add @react-native-async-storage/async-storage react-native-status-bar-height @react-native-community/netinfo axios react-native-simple-toast react-native-vector-icons lottie-react-native lottie-ios react-native-svg react-native-fast-image react-native-snackbar

yarn add --dev react-native-svg-transformer

3 - Install navigation all packages

- yarn add @react-navigation/native
- yarn add react-native-screens react-native-safe-area-context react-native-gesture-handler
- yarn add @react-navigation/stack

Add the following code to the body of MainActivity class:

```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

and make sure to add an import statement at the top of this file:

```
import android.os.Bundle;
```

check latest updates 
- https://reactnavigation.org/docs/getting-started/

4 - copy src folder and react-native.config.js , metro.config.js (root folder)

5 - Add Multidex in Android

  reference 
  https://developer.android.com/studio/build/multidex#java
   
   - In android/app/build.gradle, update the dependency block:

    dependencies 
    { 
      // ... your other dependencies 
      // Multidex 
      implementation "androidx.multidex:multidex:2.0.1" 
    }
    
   And also update the defaultConfig in the android block:
    
    defaultConfig {
    // ... your `applicationId`, etc.
    multiDexEnabled true
    }
    
   In MainApplication.java, replace
    
    import android.app.Application
    
   at the top with
    
    import androidx.multidex.MultiDexApplication;
    
   Still in MainApplication.java, replace
   
    public class MainApplication extends Application 
    
   to
 
    public class MainApplication extends MultiDexApplication 
   

Finally  npx react-native-asset , Due to autolinking, link and unlink commands have been removed in React Native 0.69. try to add manually.

This project include DarkMode , No Internet Screen , Shop Closed Screen , Maintenance Screen , Fonts , IconPack , Animation , FastImage ,  SVG Support , Local Storage , Context , Colors .etc

Upgrade React native project
cd project folder - open terminal - react-native upgrade
