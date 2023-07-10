`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 2023/04/23 22:59:21
// Design Name: 
// Module Name: addsub_4bit_tb
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module addsub_4bit_tb;
    reg [3:0] a, b;
    reg ctrl;
    
    addsub_4bit a4b(
        .a(a),
        .b(b),
        .ctrl(ctrl)
    );
    integer i, j;
    initial begin
        // ctrl 0就是加法
        ctrl = 1'b0;
        a = 4'b0000;
        b = 4'b0000;
        for(i = 0; i < 16; i = i + 1) begin
            for(j = 0; j < 16; j = j + 1) begin
                #10 b = b + 1'b1;
            end
            a = a + 1'b1;
        end
        
        // ctrl 选1就是减法
        ctrl = 1'b1;
        a = 4'b0000;
        b = 4'b0000;
        for(i = 0; i < 16; i = i + 1) begin
            for(j = 0; j < 16; j = j + 1) begin
                #10 b = b + 1'b1;
            end
            a = a + 1'b1;
        end
    end
endmodule
