# GoLorryTest

Steps to run mock-server
========================

1. Go to mock-server folder.
2. Run "npm i" to install node_modules.
2. Run "npx nodemon" to start the mock-server at port 5000 of your machine.

Steps to run the app
====================

1. Create local.properties file and place it under android/ folder.
Add sdk path like sdk.dir = /Users/<Your Profile>/Library/Android/sdk
2. Run 'npm i' command to install node_modules.
3. Change the 'baseURL' in src/axios.js to "http://{your machine ip}:5000" for mac OS user. For Windows run "adb reverse tcp:5000 tcp:5000" to reset the port when  pointed to localhost.
4. cd android and run "./gradlew clean". Run "chmod 777 ./gradlew" to provide access to use ./gradlew command if not given already.
5. After build is successful run "cd ..".
6. Make sure you have opened emulator from Android Studio/ Device is connected and run "npx react-native run-android" to compile and install the app into emulator/device.
7. There is no username/password needed as of now to login to app. Click on 'Login' and proceed to Landing screen/ Orders Screen.
8. Test the mock-server is running by hitting the "http://localhost:5000" or "http://{your machine ip}:5000". 
