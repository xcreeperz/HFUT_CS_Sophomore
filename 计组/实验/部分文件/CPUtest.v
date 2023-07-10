`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 2023/05/27 20:11:06
// Design Name: 
// Module Name: CPUtest
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


module CPUtest;
reg clk, rst;
CPU CPU(
    .clk(clk),
    .rst(rst)
);

initial begin
    clk = 1;
    rst = 0;
end
always #5 clk = ~clk;
endmodule
