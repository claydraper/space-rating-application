package com.spaceRatingApp.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.spaceRatingApp.service.UserService;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
	
	private final UserService userService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public WebSecurity(UserService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.userService = userDetailsService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		

		http.cors().and().csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS, "/login*").permitAll()
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
		.antMatchers(HttpMethod.GET, "/users/{userid}/spaces").permitAll()
		.antMatchers(HttpMethod.POST, SecurityConstants.SIGN_UP_URL).permitAll()
		.antMatchers(HttpMethod.POST, "/login").permitAll()
		.antMatchers(HttpMethod.POST, "/spaces/**").permitAll()
		.antMatchers(HttpMethod.GET, "/spaces/{externalId}").permitAll()
		.antMatchers(HttpMethod.GET, "/spaces").permitAll()
		.antMatchers(HttpMethod.DELETE, "/spaces/{externalId}").permitAll()
		.antMatchers(HttpMethod.PUT, "/spaces/{externalId}").permitAll()
		.anyRequest().authenticated().and()
		.addFilter(getAuthenticationFilter());
	}
	
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder);
	}
	
	 private AuthenticationFilter getAuthenticationFilter() throws Exception {
	        final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager());
	        return filter;
	        
	 }

	
}