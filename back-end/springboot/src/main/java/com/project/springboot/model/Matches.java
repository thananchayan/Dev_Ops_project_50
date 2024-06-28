package com.project.springboot.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class Matches {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "`match`",length = 255,nullable = false)
    private String match;
    @Column(name = "format",length = 20,nullable = false)
    private String format;
    @Column(name = "location",length = 255,nullable = false)
    private String location;
    @Column(name = "date",nullable = false)
    private java.sql.Date date;
    @Column(name = "time",nullable = false)
    private String time;
    @Column(name = "description",length = 255,nullable = false)
    private String description;

    @Column(name = "totalseats",nullable = false)
    private int totalSeats;

    @Column(name = "availableseats",nullable = false)
    private int availableSeats;

    public Matches(long id, String match, String format, String location, Date date, String time, String description, int totalSeats, int availableSeats) {
        this.id = id;
        this.match = match;
        this.format = format;
        this.location = location;
        this.date = date;
        this.time = time;
        this.description = description;
        this.totalSeats = totalSeats;
        this.availableSeats = availableSeats;
    }

    public Matches() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMatch() {
        return match;
    }

    public void setMatch(String match) {
        this.match = match;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTotalSeats() {
        return totalSeats;
    }

    public void setTotalSeats(int totalSeats) {
        this.totalSeats = totalSeats;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    @Override
    public String toString() {
        return "Matches{" +
                "id=" + id +
                ", match='" + match + '\'' +
                ", format='" + format + '\'' +
                ", location='" + location + '\'' +
                ", date=" + date +
                ", time='" + time + '\'' +
                ", description='" + description + '\'' +
                ", totalSeats=" + totalSeats +
                ", availableSeats=" + availableSeats +
                '}';
    }
}
