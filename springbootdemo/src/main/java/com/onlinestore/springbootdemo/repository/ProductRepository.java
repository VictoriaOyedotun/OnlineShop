package com.onlinestore.springbootdemo.repository;

import com.onlinestore.springbootdemo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
