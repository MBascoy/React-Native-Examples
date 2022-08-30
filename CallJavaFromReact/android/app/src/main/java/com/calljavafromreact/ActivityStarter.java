package com.calljavafromreact;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ActivityStarter extends ReactContextBaseJavaModule {

    public ActivityStarter(ReactApplicationContext reactContext){
        super(reactContext);

    }

    @NonNull
    @Override
    public String getName() {
        return "ActivityStarter";
    }

    @ReactMethod
    public void open(String activityText){
        Intent intent = new Intent(getCurrentActivity(), JavaActivity.class);
        intent.putExtra("TITLE", activityText);
        getCurrentActivity().startActivity(intent);
    }
}
