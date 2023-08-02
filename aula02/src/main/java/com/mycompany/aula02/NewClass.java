package com.mycompany.aula02;
import java.util.Scanner;


public class NewClass {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite um número : ");
        int numeroUm = scanner.nextInt();
        
        System.out.println("Digite outro número : ");
        int numeroDois = scanner.nextInt();
        
        
        System.out.println(numeroUm); 
        System.out.println(numeroDois); 
        
        System.out.printf("você digitou %s e %s, o maior número é " + Math.max(numeroUm, numeroDois), numeroUm, numeroDois); 
    }
}
