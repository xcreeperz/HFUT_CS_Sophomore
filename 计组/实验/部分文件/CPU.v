module CPU(
    input clk,
    input rst
    );
    
    wire[31:0] Ins;
    wire[5:0] OP, func;
    wire[4:0] rs, rt, rd;
    wire regWe;
    wire[31:0] R_Data_A, R_Data_B;
    wire[2:0] ALU_OP;
    wire[31:0] ALU_F;
    wire ZF, OF;
    
    Fetch_Inst fetch_inst(.rst(rst), .clk(clk), .Inst_code(Ins));
    
    Inst_cut inst_cut(.Ins(Ins), .OP(OP), .rs(rs), .rt(rt), .rd(rd), .func(func));
    Registerfile regfile(
        .R_Addr_A(rs), .R_Addr_B(rt), .W_Addr(rd), .We(regWe), 
        .W_Data(ALU_F), .Clk(!clk), .Reset(rst), .R_Data_A(R_Data_A), .R_Data_B(R_Data_B)
    );
    control control(.OP(OP), .func(func), .We(regWe), .ALU_OP(ALU_OP));
    ALU alu(.A(R_Data_A), .B(R_Data_B), .F(ALU_F), .ALU_OP(ALU_OP), .ZF(ZF), .OF(OF));
endmodule
