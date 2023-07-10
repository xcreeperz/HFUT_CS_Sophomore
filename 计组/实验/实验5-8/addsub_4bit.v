`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 2023/04/23 22:00:39
// Design Name: 
// Module Name: AddSub4b
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


module addsub_4bit(
    input [3:0] a,
    input [3:0] b,
    input ctrl,
    output [3:0] s,
    output co
    );
    wire co1, co2, co3, co4;
    AddSub1b a1b1(
        .a(a[0]),
        .b(b[0]),
        .ctl(ctrl),
        .ci(ctrl),
        .s(s[0]),
        .co(co1)
    );
    AddSub1b a1b2(
        .a(a[1]),
        .b(b[1]),
        .ctl(ctrl),
        .ci(co1),
        .s(s[1]),
        .co(co2)
    );
    AddSub1b a1b3(
        .a(a[2]),
        .b(b[2]),
        .ctl(ctrl),
        .ci(co2),
        .s(s[2]),
        .co(co3)
    );
    AddSub1b a1b4(
        .a(a[3]),
        .b(b[3]),
        .ctl(ctrl),
        .ci(co3),
        .s(s[3]),
        .co(co4)
    );
    assign co = co4 ^ ctrl;
endmodule
