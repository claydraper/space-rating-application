package com.spaceRatingApp.entity;

import javax.persistence.Column;
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
	private String photo;

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

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
}