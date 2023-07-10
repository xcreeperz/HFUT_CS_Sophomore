module control(
    input[5:0] OP,
    input[5:0] func,
    output reg We,
    output reg[2:0] ALU_OP
    );
    parameter OP_CALC = 6'b000000;
    
    parameter FUNC_ADD = 6'b100000;
    parameter FUNC_SUB = 6'b100010;
    parameter FUNC_AND = 6'b100100;
    parameter FUNC_OR = 6'b100101;
    parameter FUNC_XOR = 6'b100110;
    parameter FUNC_NOR = 6'b100111;
    parameter FUNC_SLTU = 6'b101011;
    parameter FUNC_SLLV = 6'b000100;
    
    always@(*) begin
        case(OP) 
            OP_CALC: begin
                case(func)
                    FUNC_AND: ALU_OP = 3'b000;
                    FUNC_OR: ALU_OP = 3'b001;
                    FUNC_XOR: ALU_OP = 3'b010;
                    FUNC_NOR: ALU_OP = 3'b011;
                    FUNC_ADD: ALU_OP = 3'b100;
                    FUNC_SUB: ALU_OP = 3'b101;
                    FUNC_SLTU: ALU_OP = 3'b110;
                    FUNC_SLLV: ALU_OP = 3'b111;
                    default begin
                    end
                endcase
                We = 0;
            end
            default begin
            We = 1;
            end
        endcase
    end
endmodule
