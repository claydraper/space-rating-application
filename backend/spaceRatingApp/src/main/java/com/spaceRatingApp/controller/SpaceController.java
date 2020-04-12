package com.spaceRatingApp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spaceRatingApp.model.Request.SpaceRequestModel;
import com.spaceRatingApp.model.response.SpaceReturnModel;
import com.spaceRatingApp.service.SpaceService;
import com.spaceRatingApp.shared.SpaceDto;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpaceController {
	
	@Autowired
	SpaceService spaceService;

	@GetMapping(path = "/spaces")
	public List<SpaceReturnModel> getAllSpaces() {

		List<SpaceReturnModel> returnValue = new ArrayList<>();
		
		List<SpaceDto> spaces = spaceService.getAllSpaces();
		
		for (SpaceDto spaceDto : spaces) {
			SpaceReturnModel spaceReturnModel = new SpaceReturnModel();
			BeanUtils.copyProperties(spaceDto, spaceReturnModel);
			returnValue.add(spaceReturnModel);
		}
		
		return returnValue;
	}
	
	@GetMapping(path = "/spaces/{externalId}")
	public SpaceReturnModel getSpace(@PathVariable String externalId) {
		SpaceReturnModel returnValue = new SpaceReturnModel();
		
		SpaceDto spaceDto = spaceService.getSpaceByexternalId(externalId);
		
		BeanUtils.copyProperties(spaceDto, returnValue);
		
		return returnValue;
	}
	
	@GetMapping(path = "/users/{userId}/spaces")
	public List<SpaceReturnModel> getAllSpacesByUserId(@PathVariable String userId) {
		
		List<SpaceReturnModel> returnValue = new ArrayList<>();
		
		List<SpaceDto> spaces = spaceService.getAllSpacesByUserId(userId);
		
		for (SpaceDto spaceDto: spaces) {
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
	
	@PutMapping(path="/spaces/{externalId}")
	public SpaceReturnModel updateUser(@PathVariable String externalId, @RequestBody SpaceRequestModel spaceDetails) {
	if (spaceDetails.getDescription() == "") {
		throw new RuntimeException("Description cannot be blank");
	}
	if (spaceDetails.getName() == "") {
		throw new RuntimeException("Name cannot be blank");
	}
	
	if (spaceDetails.getPhoto() == "") {
		throw new RuntimeException("Must enter valid photo");
	}
	if (spaceDetails.getCity() == "") {
		throw new RuntimeException("City cannot be blank");
	}
		
	SpaceReturnModel returnValue = new SpaceReturnModel();
	
	SpaceDto spaceDto = new SpaceDto();
	BeanUtils.copyProperties(spaceDetails, spaceDto);
	
	SpaceDto updatedSpace = spaceService.updateSpace(externalId, spaceDto);
	BeanUtils.copyProperties(updatedSpace, returnValue);
	
	return returnValue;
	}
	
	@DeleteMapping(path = "/spaces/{externalId}")
	public void deleteSpace(@PathVariable String externalId) {
		spaceService.deleteSpace(externalId);
	}
}
