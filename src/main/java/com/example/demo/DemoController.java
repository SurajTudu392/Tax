package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DemoController {

    @GetMapping("/hello")
    public String showHelloPage() {
        return "hello";  // Looks for hello.html in templates/
    }
}