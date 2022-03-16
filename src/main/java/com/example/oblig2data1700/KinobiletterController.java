package com.example.oblig2data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinobiletterController {

    public final ArrayList<Bilett> billettArray = new ArrayList<>();

    @PostMapping("/register")
    public void lagreBilett(Bilett enbestilling){
        billettArray.add(enbestilling);
    }

    @GetMapping("/getAll")
    public List<Bilett> getAll() {
        return billettArray;
    }

    @GetMapping("/deleteAll")
    public void deleteAll() {
        billettArray.clear();
    }
}
