module converter_td();
  reg [3:0] DB;
  wire [6:0] SEG;

converter converter (
    .DB(DB),
    .SEG(SEG)
  );
  
  initial begin
    DB = 4'b1000; // 8
    #10;
    DB = 4'b0010; // 2
    #10;
    DB = 4'b0101; // 5
    #10;
    DB = 4'b0110; // 7
    #10;
    $finish; // ½áÊø·ÂÕæ
  end
endmodule