package com.example.oblig2data1700;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class Oblig2Data1700Application {

    public static void main(String[] args) {
        SpringApplication.run(Oblig2Data1700Application.class, args);
    }

    @PostConstruct
    private void init(){

    }
}
