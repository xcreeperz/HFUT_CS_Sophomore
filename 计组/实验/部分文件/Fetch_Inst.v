module Fetch_Inst(
    input rst,
	 input clk,
	 output [31:0] Inst_code
    );
    wire [31:0] PC_new;
	reg [31:0] PC;
	initial
	   PC=32'h00000000;
	ROM Inst_addr( 
	   .clka(clk),
	   .addra(PC[7:2]),
	   .douta(Inst_code)
	);
	assign PC_new=PC+4;
	always@(posedge rst or negedge clk) begin
        if(rst)
            PC=32'h00000000;
        else
            PC={24'h000000,PC_new[7:0]};
	end
endmodule
