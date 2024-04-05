package com.onlinestore.springbootdemo.service;

import com.onlinestore.springbootdemo.exception.ProductNotFoundException;
import com.onlinestore.springbootdemo.model.Product;
import com.onlinestore.springbootdemo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProductService implements IproductService{
    private final ProductRepository productRepository;
    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
//        if(productAlreadyExists)
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product, Long id) {
        return productRepository.findById(id).map(st -> {
            st.setName(product.getName());
            st.setDescription(product.getDescription());
            st.setPrice(product.getPrice());
            st.setCategory(product.getCategory());
            return productRepository.save(st);
        }).orElseThrow(() -> new ProductNotFoundException("Sorry, this product could not be found."));
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Sorry, no product found with the Id: " + id));
    }

    @Override
    public void deleteProduct(Long id) {
        if(!productRepository.existsById(id)){
            throw new ProductNotFoundException("Sorry, product not found.");
        }
        else {
            productRepository.deleteById(id);
        }
    }
}
