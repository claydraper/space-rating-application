package com.spaceRatingApp.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.spaceRatingApp.shared.UserDto;

public interface UserService extends UserDetailsService {
	
	UserDto createUser(UserDto user);
	UserDto getUser(String email);
	UserDto getUserByUserId(String userId);
	UserDto updateUser(String id, UserDto user);
	void deleteUser(String id);
}
