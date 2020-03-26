package com.spaceRatingApp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spaceRatingApp.model.SpaceRequestModel;
import com.spaceRatingApp.model.SpaceReturnModel;
import com.spaceRatingApp.service.SpaceService;
import com.spaceRatingApp.shared.SpaceDto;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpaceController {
	
	@Autowired
	SpaceService spaceService;

	@GetMapping(path = "/spaces")
	public List<SpaceReturnModel> getAllUsers() {

		List<SpaceReturnModel> returnValue = new ArrayList<>();
		
		List<SpaceDto> spaces = spaceService.getAllSpaces();
		
		for(SpaceDto spaceDto : spaces) {
			SpaceReturnModel spaceReturnModel = new SpaceReturnModel();
			BeanUtils.copyProperties(spaceDto, spaceReturnModel);
			returnValue.add(spaceReturnModel);
		}
		
		return returnValue;
	}
	
	@PostMapping(path="/spaces")
	public SpaceReturnModel createSpace(@RequestBody SpaceRequestModel spaceRequestModel) {
		
		SpaceDto spaceDto = new SpaceDto();
		BeanUtils.copyProperties(spaceRequestModel, spaceDto);
		
		SpaceDto createdSpace = spaceService.createSpace(spaceDto);
		
		SpaceReturnModel returnValue = new SpaceReturnModel();
		
		BeanUtils.copyProperties(createdSpace, returnValue);
		
		return returnValue;
	}
	
	@PutMapping(path="/spaces/{id}")
	public String updateSpace() {
		return "update space was called";
	}
	
	@DeleteMapping(path="/spaces/{id}")
	public String deleteSpace() {
		return "delete space called successfully";
	}
}
