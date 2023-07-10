module Inst_cut(
    input[31:0] Ins,
    output [5:0] OP,
    output [4:0] rs,
    output [4:0] rt,
    output [4:0] rd,
    output [5:0] func
    );
    assign OP = Ins[31:26];
    assign rs = Ins[25:21];
    assign rt = Ins[20:16];
    assign rd = Ins[15:11];
    assign func = Ins[5:0];
endmodule
