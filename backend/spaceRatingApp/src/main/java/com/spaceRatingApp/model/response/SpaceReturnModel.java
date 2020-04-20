package com.spaceRatingApp.model.response;

import java.util.ArrayList;
import java.util.List;

public class SpaceReturnModel {
	
	private String externalId;
	private String name;
	private String city;
	private String state;
	private String description;
	private List<String> photos = new ArrayList<String>();
	private String webAddress;
	private String priceRange;
	private String pluginAccess;
	private String noiseLevel;
	private String seating;
	private String userId;
	private int starRating;
	
	
	// getters and setters
	public String getExternalId() {
		return externalId;
	}
	public void setExternalId(String externalId) {
		this.externalId = externalId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<String> getPhotos() {
		return photos;
	}
	public void setPhotos(List<String> photos) {
		this.photos = photos;
	}
	public String getWebAddress() {
		return webAddress;
	}
	public void setWebAddress(String webAddress) {
		this.webAddress = webAddress;
	}
	public String getPriceRange() {
		return priceRange;
	}
	public void setPriceRange(String priceRange) {
		this.priceRange = priceRange;
	}
	public String getPluginAccess() {
		return pluginAccess;
	}
	public void setPluginAccess(String pluginAccess) {
		this.pluginAccess = pluginAccess;
	}
	public String getNoiseLevel() {
		return noiseLevel;
	}
	public void setNoiseLevel(String noiseLevel) {
		this.noiseLevel = noiseLevel;
	}
	public String getSeating() {
		return seating;
	}
	public void setSeating(String seating) {
		this.seating = seating;
	}
	public int getStarRating() {
		return starRating;
	}
	public void setStarRating(int starRating) {
		this.starRating = starRating;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
}
