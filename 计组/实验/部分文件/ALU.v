module ALU(A,B,F,ALU_OP,ZF,OF);
   input [31:0] A,B;
	input [2:0] ALU_OP;
	output reg ZF,OF;
	output reg [31:0] F;
	reg C;
	always @(*)
	begin
		C=0;
		case (ALU_OP)
			3'b000:begin F=A&B; end
			3'b001:begin F=A|B; end
			3'b010:begin F=A^B; end
			3'b011:begin F=~(A|B); end
			3'b100:begin {C,F}=A+B; end
			3'b101:begin {C,F}=A-B; end
			3'b110:begin F=A<B; end
			3'b111:begin F=B<<A; end
		endcase
	end
	always @(*)
	begin 
		ZF= F==0;
		OF= A[31]^B[31]^F[31]^C;
	end
endmodule
