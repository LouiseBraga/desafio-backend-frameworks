package com.example.javaspringboot.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UserController {

    @PostMapping
    public String criarUsuario() {
        return "Usuário criado com sucesso no Spring Boot!";
    }
}