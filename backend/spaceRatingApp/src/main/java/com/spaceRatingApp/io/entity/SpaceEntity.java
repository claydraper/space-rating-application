package com.spaceRatingApp.io.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity(name="spaces")
public class SpaceEntity {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false)
	private String externalId;
	
	@Column(nullable=false)
	private String name;
	
	@Column(nullable=false)
	private String city;
	
	@Column(nullable=false)
	private String state;
	
	@Column(nullable=false, length=300)
	private String description;
	
	@Column(nullable=false)
	@ElementCollection
	private List<String> photos = new ArrayList<String>();
	
	@Column
	private String webAddress;
	
	@Column(nullable=false)
	private String priceRange;
	
	@Column(nullable=false)
	private String pluginAccess;
	
	@Column(nullable=false)
	private String noiseLevel;
	
	@Column(nullable=false)
	private String seating;
	
	@Column(nullable=false)
	private String userId;
	
	@Column(nullable=false)
	private int starRating;

	
	//	 getters and setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

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