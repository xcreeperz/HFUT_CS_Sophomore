`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 2023/04/23 21:56:55
// Design Name: 
// Module Name: AddSub1b
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


module AddSub1b(
    input a,
    input b,
    input ctl,
    input ci,
    output s,
    output co
    );
    wire b_ctl = b ^ ctl;
    Add1b add1b(
        .a(a),
        .b(b_ctl),
        .ci(ci),
        .s(s),
        .co(co)
    );
endmodule
