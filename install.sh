#!/bin/bash
cd /home/turtle/_projects/_repo/JeeMap/

# Deploy edge functions
supabase functions deploy notify

# Icons
cp -r icons/mipmap-mdpi/*       android/app/src/main/res/mipmap-mdpi/
cp -r icons/mipmap-hdpi/*       android/app/src/main/res/mipmap-hdpi/
cp -r icons/mipmap-xhdpi/*      android/app/src/main/res/mipmap-xhdpi/
cp -r icons/mipmap-xxhdpi/*     android/app/src/main/res/mipmap-xxhdpi/
cp -r icons/mipmap-xxxhdpi/*    android/app/src/main/res/mipmap-xxxhdpi/
cp -r icons/mipmap-anydpi-v26/* android/app/src/main/res/mipmap-anydpi-v26/
cp    icons/values/ic_launcher_background.xml android/app/src/main/res/values/ic_launcher_background.xml

# Web assets
cp -r script/* www/script/
cp -r style/* www/style/
cp index.html www/index.html
cp manifest.json www/manifest.json
cp sw.js www/sw.js

npx cap sync android && cd android && ./gradlew assembleDebug && adb install -r app/build/outputs/apk/debug/app-debug.apk