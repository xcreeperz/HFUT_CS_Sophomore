`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 2023/04/23 21:53:50
// Design Name: 
// Module Name: Add1b
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


module Add1b(
    input a,
    input b,
    input ci,
    output s,
    output co
    );
    assign s = a ^ b ^ ci;
    assign co = (a&b)|(a&ci)|(b&ci);
endmodule
