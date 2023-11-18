// package com.company;
// import java.util.*;
// import java.util.concurrent.Executor;
// import java.util.concurrent.ExecutorCompletionService;
// import java.util.concurrent.*;

// public class Main {

//     static class PrintChar implements  Runnable{
//         private char letter;
//         private int num;

//         public PrintChar(char c, int i){
//             letter = c;
//             num = i;
//         }

//         @Override
//         public void run(){

//             int i;
//             for(i =0; i <= num; i++){
//                 System.out.println(letter);
//             }
//         }

//     }

//     static class PrintNum implements Runnable {
//         private int num;

//         public PrintNum(int n){
//             num  = n;
//         }

//         @Override
//         public void run(){
//             int i;
//             for(i =0; i <= num; i++){
//                 System.out.println("" + i);
//             }
//         }

//     }

//     public static void main(String[] args) {

// //        Runnable printA = new PrintChar('a', 1010);
// //        Runnable printB = new PrintChar('b', 1010);
// //        Runnable printNum = new PrintNum(1010);
// //
// //        Thread t1 = new Thread(printA);
// //        Thread t2 = new Thread(printB);
// //        Thread t3 = new Thread(printNum);
// //
// //        t1.run();
// //        t2.run();
// //        t3.run();


//         ExecutorService executor = Executors.newCachedThreadPool();
// //        ExecutorService executor = Executors.newFixedThreadPool(800);

//         executor.submit(() ->{

//         });

//         executor.execute(new PrintChar('a', 400));
//         executor.execute(new PrintChar('b', 400));
//         executor.execute(new PrintNum(400));

//         executor.shutdown();
// //        Scanner input = new Scanner(System.in);
// //        System.out.println("Input the number to be converted to grey code: ");
// //        int num  = input.nextInt();
// //
// //        System.out.println("Input the precision (length)of the grey code to be produced: ");
// //        int length  = input.nextInt();
// //
// //        System.out.println(toGreyCode(num, length));
//     }
//     public static String toGreyCode(int num, int length){

//         String bin = sanitize(num, length);

//         if (bin == "-1"){

//             return "\n Error converting to grey code, invalid number of bits..";
//         }

//         String output = String.valueOf(bin.charAt(0));

//         int i;

//         for (i = 1; i < bin.length(); i++){
//             String res = (bin.charAt(i) != bin.charAt(i - 1)) ? "1" :"0";
//             output += res;
//         }
//         return output;
//     }

//     public static String sanitize(int num, int precision){

//         String bin = Integer.toBinaryString(num);

//         double convert = Math.log10(Math.abs(num)) / Math.log10(2);

//         double limit = (num < 0) ? Math.floor(convert + 2) : Math.floor(convert + 1);

//         if (precision < limit){
//             System.out.printf("Error..., Input number of bits greater or equal to %d", (int) limit);
//             return  "-1";
//         }

//         if ( num >= 0){

//             bin = "0".repeat(precision - bin.length()) + bin;

//         }else{
//             if (precision <= bin.length()){
//                 bin = bin.substring(bin.length() - precision);
//             }else {
//                 bin = "1".repeat(precision - bin.length()) + bin;
//             }
//         }
//         return bin;

//     };
// }