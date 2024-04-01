package com.dogventure.dogweb.mainLogic.repository;

import com.dogventure.dogweb.mainLogic.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
}
