package com.spaceRatingApp.service;

import java.util.List;

import com.spaceRatingApp.shared.SpaceDto;

public interface SpaceService {
	SpaceDto createSpace(SpaceDto space);
	List<SpaceDto> getAllSpaces();
	void deleteSpace(String id);
}