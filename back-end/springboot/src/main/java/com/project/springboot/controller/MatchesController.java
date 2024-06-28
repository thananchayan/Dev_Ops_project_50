package com.project.springboot.controller;

import com.project.springboot.exception.UserNotFoundException;
import com.project.springboot.model.Matches;
import com.project.springboot.repository.MatchRepository;
import com.project.springboot.repository.UpdateSeatsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MatchesController {

    @Autowired
    private MatchRepository matchRepository;
    @GetMapping("/matches")
    List<Matches> getAllMatches(){
        return matchRepository.findAll();
    }

    @GetMapping("/match/{id}")
    Matches getMatchesById(@PathVariable Long id){
        return matchRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    // Create a new match
    @PostMapping("/match")
    public Matches createMatch(@RequestBody Matches newMatch) {
        return matchRepository.save(newMatch);
    }





//    @PutMapping("/match/{id}")
//    public Matches updateMatch(@RequestBody Matches updatedMatch, @PathVariable Long id){
//        return matchRepository.findById(id)
//                .map(match -> {
//                    // Update the match fields with the values from the request
//                    match.setMatch(updatedMatch.getMatch());
//                    match.setFormat(updatedMatch.getFormat());
//                    match.setLocation(updatedMatch.getLocation());
//                    match.setDate(updatedMatch.getDate());
//                    match.setTime(updatedMatch.getTime());
//                    match.setTotalSeats(updatedMatch.getTotalSeats());
//                    match.setAvailableSeats(updatedMatch.getAvailableSeats());
//                    match.setDescription(updatedMatch.getDescription());
//
//                    return matchRepository.save(match);
//                })
//                .orElseThrow(() -> new UserNotFoundException(id));
//
//    }
@PutMapping("/match/{id}")
public Matches updateMatch(@RequestBody UpdateSeatsRequest updateSeatsRequest, @PathVariable Long id){
    return matchRepository.findById(id)
            .map(match -> {

                match.setAvailableSeats(updateSeatsRequest.getAvailableSeats());


                match.setMatch(updateSeatsRequest.getMatch());
                match.setFormat(updateSeatsRequest.getFormat());
                match.setLocation(updateSeatsRequest.getLocation());
                match.setDate(updateSeatsRequest.getDate());
                match.setTime(updateSeatsRequest.getTime());
                match.setTotalSeats(updateSeatsRequest.getTotalSeats());
                match.setDescription(updateSeatsRequest.getDescription());

                return matchRepository.save(match);
            })
            .orElseThrow(() -> new UserNotFoundException(id));
}





    @DeleteMapping("/match/{id}")
    String deleteMatch(@PathVariable Long id){
        if(!matchRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        matchRepository.deleteById(id);
        return "Match with id "+id+" has been successfully deleted.";
    }


}
