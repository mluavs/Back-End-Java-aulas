package com.mycompany.aula02;
import java.util.Scanner;


public class NewClass1 {

    public static void main(String[] args) {
        Scanner calculadora = new Scanner(System.in); 
        
        System.out.println("Digite um número : ");
        int numeroUm = calculadora.nextInt();
      
        System.out.println("Digite outro número : ");
        int numeroDois = calculadora.nextInt();
        
        System.out.print("##--Agora vou te pedir pra escolher uma operação--##\n\n");
        System.out.print("|------------------------|\n");
        System.out.print("| Opção 1 - Soma         |\n");
        System.out.print("| Opção 2 - Subtração    |\n");
        System.out.print("| Opção 3 - Multiplicação|\n");
        System.out.print("| Opção 4 - Divisão      |\n");
        System.out.print("|------------------------|\n");
        System.out.print("Digite uma opção: ");
        
        int opcao = calculadora.nextInt();
        
        switch (opcao) {
        case 1:
            System.out.print("Você escolheu a opção Soma. ");
            break;
        
        case 2:
            System.out.print("Você escolheu a opção Subtração. ");
            break;
            
        case 3:
            System.out.print("Você escolheu a opção Multiplicação. ");
            break;
        
        case 4:
            System.out.print("Você escolheu a opção Divisão. ");
            break;
        
        default:
            System.out.print("Você não escolheu uma opção válida");
            break;
            
        }
       if (opcao == 1){
          System.out.printf("O resultado de %s + %s é: " + (numeroUm + numeroDois), numeroUm, numeroDois);
      } else if (opcao == 2) {
          System.out.printf("O resultado de %s - %s é: " + (numeroUm - numeroDois), numeroUm, numeroDois);
      } else if (opcao == 3){
          System.out.printf("O resultado de %s * %s é: " + (numeroUm * numeroDois), numeroUm, numeroDois);
      } else if (opcao == 4) {
          System.out.printf("O resultado de %s / %s é: " + (numeroUm / numeroDois), numeroUm, numeroDois);
      } else {
          System.out.print("começa de novo, amore");
      }
    }
}

        
