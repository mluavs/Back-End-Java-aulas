/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.aula02;

import java.util.Scanner;

/**
 *
 * @author Aluno
 */
public class Aula02 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Raio: ");
        double raio = scanner.nextDouble();
        
        double area = Math.PI * Math.pow(raio, 2.0);
        
        System.out.printf("area = %.2f", area); 
    }
}
