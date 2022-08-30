package com.calljavafromreact;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class JavaActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_java);

        TextView myAwesomeTextView  = (TextView)findViewById(R.id.textView);
        myAwesomeTextView.setText(getIntent().getStringExtra("TITLE"));
    }
}