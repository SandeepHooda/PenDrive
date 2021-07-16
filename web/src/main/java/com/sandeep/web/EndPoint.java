package com.sandeep.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EndPoint {
	
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}

}
