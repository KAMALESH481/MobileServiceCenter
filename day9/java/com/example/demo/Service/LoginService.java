package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.LoginEntity;
import com.example.demo.Repository.LoginRepo;




@org.springframework.stereotype.Service
public class LoginService {
	
		@Autowired
	    LoginRepo Erepo;
		public String addDetails(LoginEntity ee) {
			Erepo.save(ee);
			return "Data added";
		}
		public String updateDetails(LoginEntity ee) {
			Erepo.saveAndFlush(ee);
			return "Data updated";
		}
		
		public String deleteDetails(int id) {
			Erepo.deleteById(id);
			return "data Deleted";
		}
		public List<LoginEntity> showDetails() {
				return Erepo.findAll();
		}

}
