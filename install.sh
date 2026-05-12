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

# Web assets — scripts (preserve JEE/ and NEET/ subfolder structure)
mkdir -p www/script/subjects/JEE
mkdir -p www/script/subjects/NEET
cp script/subjects/JEE/*.js   www/script/subjects/JEE/
cp script/subjects/NEET/*.js  www/script/subjects/NEET/
cp script/auth.js             www/script/
cp script/main.js             www/script/
cp script/notes.js            www/script/
cp script/storage.js          www/script/
cp script/supabase.js         www/script/
cp script/sync.js             www/script/
cp script/tags.js             www/script/

# Styles
cp -r style/* www/style/

# Root files
cp index.html    www/index.html
cp manifest.json www/manifest.json
cp sw.js         www/sw.js

npx cap sync android && cd android && ./gradlew assembleDebug && adb install -r app/build/outputs/apk/debug/app-debug.apk
