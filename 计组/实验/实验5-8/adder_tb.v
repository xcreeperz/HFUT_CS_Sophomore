`timescale 1ns / 1ps 
module adder_tb( );
    reg a; reg b; reg ci;
    wire s;
    wire co;
    adder_1bit  u0( .a(a), .b(b), .ci(ci) , .s(s), .co(co) );
    initial begin
        a = 1'b0; 
        b = 1'b0; 
        ci = 1'b0;
        #100;
        a = 1'b0; 
        b = 1'b0; 
        ci = 1'b1;
        #100; 
        a = 1'b0; 
        b = 1'b1; 
        ci = 1'b0;
        #100; 
        a = 1'b0; 
        b = 1'b1; 
        ci = 1'b1;
        #100;
        a = 1'b1; 
        b = 1'b0; 
        ci = 1'b0;
        #100; 
        a = 1'b1; 
        b = 1'b0; 
        ci = 1'b1;
        #100;
        a = 1'b1; 
        b = 1'b1; 
        ci = 1'b0;
        #100;
        a = 1'b1; 
        b = 1'b1; 
        ci = 1'b1;
        #100; 
        a = 1'b0; 
        b = 1'b0; 
        ci = 1'b0;
        #100;
    end
endmodule
