module Registerfile(input [4:0]  R_Addr_A,
					  input [4:0] R_Addr_B,
					  input [4:0] W_Addr,		
					  input We,		 //�͵�ƽ����д���ߵ�ƽ�������
					  input [31:0] W_Data,
					  input Clk,
					  input Reset,
					  output [31:0] R_Data_A,
					  output [31:0]  R_Data_B
					  );
	reg [31:0]  REG_Files[0:31];
	reg [5:0]  i;
	
	initial				//��ʼ��
	begin
	 for(i=0;i<32;i=i+1)
		REG_Files[i]=0;
	end
	
	assign R_Data_A = REG_Files[R_Addr_A];
   assign R_Data_B = REG_Files[R_Addr_B];
	
	always@(posedge Clk or posedge Reset)
	begin
	 if(Reset)			//��������
	  for(i=0;i<32;i=i+1)
		REG_Files[i]=0;
	 else
	  if(!We)
	   REG_Files[W_Addr]=W_Data;
	end
	
endmodule
