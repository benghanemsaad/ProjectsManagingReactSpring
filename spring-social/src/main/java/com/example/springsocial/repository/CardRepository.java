package com.example.springsocial.repository;

import com.example.springsocial.model.Card;
import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card,Long> {
}
