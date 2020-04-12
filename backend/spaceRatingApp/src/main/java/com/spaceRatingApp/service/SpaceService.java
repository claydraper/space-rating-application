package com.spaceRatingApp.service;

import java.util.List;

import com.spaceRatingApp.shared.SpaceDto;

public interface SpaceService {
	SpaceDto createSpace(SpaceDto space);
	List<SpaceDto> getAllSpaces();	
	List<SpaceDto> getAllSpacesByUserId(String userId);
	void deleteSpace(String id);
	SpaceDto getSpaceByexternalId(String externalId);
	SpaceDto updateSpace(String externalId, SpaceDto spaceDto);
}