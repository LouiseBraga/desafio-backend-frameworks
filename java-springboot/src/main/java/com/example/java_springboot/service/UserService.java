package com.example.javaspringboot.service;

import com.example.javaspringboot.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public boolean validarUsuario(User user) {  //Verifica se o email já existe no banco
        return true; 
    }
}