package com.accesories.carsparts.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Marks this as a configuration class
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Allow all endpoints
                .allowedOrigins("http://localhost:3000") // Allow frontend from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Specify allowed HTTP methods
                .allowedHeaders("*"); // Allow any headers
    }
}
