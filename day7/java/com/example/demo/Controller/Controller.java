package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.registerEntity;
import com.example.demo.Service.Service;
@RestController
public class Controller {
	@Autowired
	Service Eservice;
	
	@GetMapping("/showDetails")
	public List <registerEntity> show() {
		return Eservice.showDetails();
	}
	
	@PutMapping("/updateDetails")
	public String update(@RequestBody registerEntity ee) {
		return Eservice.updateDetails(ee);
	}
	
	@DeleteMapping("/deleteDetails/{eid}")
	public String delete(@PathVariable("eid") int id) {
		return Eservice.deleteDetails(id);
	}
	
	@PostMapping("/addDetails")
	public String add(@RequestBody registerEntity ee) {
		return Eservice.addDetails(ee);
		
	}
}

