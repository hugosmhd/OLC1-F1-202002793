/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[30,31,32,33,34],$V1=[2,21],$V2=[1,12],$V3=[1,13],$V4=[1,15],$V5=[1,14],$V6=[1,18],$V7=[1,16],$V8=[1,17],$V9=[5,21,22,27,28,29,30,31,32,33,34,36,37,38],$Va=[1,33],$Vb=[1,34],$Vc=[1,50],$Vd=[1,54],$Ve=[1,43],$Vf=[1,44],$Vg=[1,45],$Vh=[1,46],$Vi=[1,47],$Vj=[1,48],$Vk=[1,49],$Vl=[1,51],$Vm=[8,24,39,40,41,42,43,44,51,52,53,54,55,56,57,58,59],$Vn=[18,20],$Vo=[1,60],$Vp=[1,61],$Vq=[1,62],$Vr=[1,63],$Vs=[1,64],$Vt=[1,65],$Vu=[1,66],$Vv=[1,67],$Vw=[1,68],$Vx=[1,69],$Vy=[1,70],$Vz=[1,71],$VA=[1,72],$VB=[1,73],$VC=[1,74],$VD=[1,100],$VE=[8,24,39,40,51,52,53,54,55,56,57,58,59],$VF=[8,24,39,40,41,42,44,51,52,53,54,55,56,57,58,59],$VG=[8,24,51,52,57,58,59],$VH=[8,24,51,52,53,54,55,56,57,58,59],$VI=[5,21,22,26,27,28,29,30,31,32,33,34,36,37,38];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"ptcoma":8,"ASIGNACION":9,"IF":10,"WHILE":11,"PRINT":12,"INCREMENT":13,"DECREMENT":14,"TIPO_DECLARACION":15,"TIPODATO":16,"IDS":17,"igual":18,"EXPRESION":19,"coma":20,"identificador":21,"pr_if":22,"pabre":23,"pcierra":24,"BLOQUEINSTRUCCIONES":25,"pr_else":26,"pr_print":27,"pr_while":28,"pr_const":29,"pr_int":30,"pr_double":31,"pr_boolean":32,"pr_char":33,"pr_string":34,"llabre":35,"llcierra":36,"masmas":37,"menosmenos":38,"mas":39,"menos":40,"por":41,"div":42,"pot":43,"modulo":44,"entero":45,"decimal":46,"caracter":47,"cadena":48,"pr_true":49,"pr_false":50,"igualigual":51,"diferente":52,"menorque":53,"mayorque":54,"menorigual":55,"mayorigual":56,"and":57,"or":58,"xor":59,"not":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"ptcoma",18:"igual",20:"coma",21:"identificador",22:"pr_if",23:"pabre",24:"pcierra",26:"pr_else",27:"pr_print",28:"pr_while",29:"pr_const",30:"pr_int",31:"pr_double",32:"pr_boolean",33:"pr_char",34:"pr_string",35:"llabre",36:"llcierra",37:"masmas",38:"menosmenos",39:"mas",40:"menos",41:"por",42:"div",43:"pot",44:"modulo",45:"entero",46:"decimal",47:"caracter",48:"cadena",49:"pr_true",50:"pr_false",51:"igualigual",52:"diferente",53:"menorque",54:"mayorque",55:"menorigual",56:"mayorigual",57:"and",58:"or",59:"xor",60:"not"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[6,2],[7,5],[17,3],[17,1],[9,3],[10,5],[10,7],[10,7],[12,4],[11,5],[15,1],[15,0],[16,1],[16,1],[16,1],[16,1],[16,1],[25,3],[25,2],[13,2],[13,2],[14,2],[14,2],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,2],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,2],[19,1],[19,1],[19,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return $$[$0-1];        
    
break;
case 2:
 $$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3:
 this.$ = [$$[$0]] 
break;
case 4: case 9: case 10:
 this.$=$$[$0-1]; 
break;
case 6:
 this.$=$$[$0]; 
break;
case 11:
this.$= new Declaracion($$[$0-2],$$[$0-3],$$[$0],_$[$0-4].first_line, _$[$0-4].first_column);
break;
case 12:
$$[$0-2].push($$[$0]);
break;
case 13:
this.$ = [$$[$0]]
break;
case 15:
this.$ = new If($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 16: case 17:
 this.$ = new If($$[$0-4], $$[$0-2], _$[$0-6].first_line, _$[$0-6].first_column, $$[$0]); 
break;
case 18:
this.$ = new Print($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 22:
this.$=Type.INT;
break;
case 23:
this.$=Type.DOUBLE;
break;
case 24:
this.$=Type.BOOLEAN;
break;
case 25:
this.$=Type.CHAR;
break;
case 26:
this.$=Type.STRING;
break;
case 27:
 this.$ = $$[$0-1]; 
break;
case 29:
this.$ = new Incremento($$[$0], IncrementOption.MASMAS_PRE, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 30:
this.$ = new Incremento($$[$0-1], IncrementOption.MASMAS_POST, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 31:
this.$ = new Decremento($$[$0], DecrementOption.MENOSMENOS_PRE, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 32:
this.$ = new Decremento($$[$0-1], DecrementOption.MENOSMENOS_POST, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 33:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MAS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 34:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MENOS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 35:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 36:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 37:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POT, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 38:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MODULO, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 39:
this.$= new Arithmetic($$[$0],null,ArithmeticOption.MENOSUNARIO, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 40:
this.$=new Literal($$[$0],Type.INT , _$[$0].first_line, _$[$0].first_column)
break;
case 41:
this.$=new Literal($$[$0],Type.DOUBLE , _$[$0].first_line, _$[$0].first_column)
break;
case 42:
this.$=new Literal($$[$0],Type.CHAR , _$[$0].first_line, _$[$0].first_column)
break;
case 43:
this.$=new Literal($$[$0],Type.STRING , _$[$0].first_line, _$[$0].first_column)
break;
case 44: case 45:
this.$=new Literal($$[$0],Type.BOOLEAN , _$[$0].first_line, _$[$0].first_column)
break;
case 46:
this.$ = new Identificador($$[$0], _$[$0].first_line, _$[$0].first_column);
break;
case 47:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.IGUALIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 48:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.DIFERENTE, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 49:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.MENOR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 50:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.MAYOR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 51:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.MENORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 52:
this.$ = new Relacional($$[$0-2], $$[$0], RelacionalOption.MAYORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 53:
this.$ = new Logical($$[$0-2], $$[$0], LogicalOption.AND, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 54:
this.$ = new Logical($$[$0-2], $$[$0], LogicalOption.OR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 55:
this.$ = new Logical($$[$0-2], $$[$0], LogicalOption.XOR, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 56:
this.$ = new Logical($$[$0], null, LogicalOption.NOT, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 57: case 58:
this.$ = $$[$0]
break;
}
},
table: [o($V0,$V1,{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,21:$V2,22:$V3,27:$V4,28:$V5,29:$V6,37:$V7,38:$V8}),{1:[3]},o($V0,$V1,{7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,6:20,5:[1,19],21:$V2,22:$V3,27:$V4,28:$V5,29:$V6,37:$V7,38:$V8}),o($V9,[2,3]),{8:[1,21]},{8:[1,22]},o($V9,[2,6]),o($V9,[2,7]),{8:[1,23]},{8:[1,24]},{8:[1,25]},{16:26,30:[1,27],31:[1,28],32:[1,29],33:[1,30],34:[1,31]},{18:[1,32],37:$Va,38:$Vb},{23:[1,35]},{23:[1,36]},{23:[1,37]},{21:[1,38]},{21:[1,39]},o($V0,[2,20]),{1:[2,1]},o($V9,[2,2]),o($V9,[2,4]),o($V9,[2,5]),o($V9,[2,8]),o($V9,[2,9]),o($V9,[2,10]),{17:40,21:[1,41]},{21:[2,22]},{21:[2,23]},{21:[2,24]},{21:[2,25]},{21:[2,26]},{13:52,14:53,19:42,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},o($Vm,[2,30]),o($Vm,[2,32]),{13:52,14:53,19:55,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:56,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:57,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},o($Vm,[2,29]),o($Vm,[2,31]),{18:[1,58],20:[1,59]},o($Vn,[2,13]),{8:[2,14],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},{13:52,14:53,19:75,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},o($Vm,[2,40]),o($Vm,[2,41]),o($Vm,[2,42]),o($Vm,[2,43]),o($Vm,[2,44]),o($Vm,[2,45]),o($Vm,[2,46],{37:$Va,38:$Vb}),{13:52,14:53,19:76,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},o($Vm,[2,57]),o($Vm,[2,58]),{13:52,14:53,19:77,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{24:[1,78],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},{24:[1,79],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},{24:[1,80],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},{13:52,14:53,19:81,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{21:[1,82]},{13:52,14:53,19:83,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:84,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:85,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:86,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:87,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:88,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:89,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:90,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:91,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:92,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:93,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:94,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:95,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:96,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},{13:52,14:53,19:97,21:$Vc,23:$Vd,37:$V7,38:$V8,40:$Ve,45:$Vf,46:$Vg,47:$Vh,48:$Vi,49:$Vj,50:$Vk,60:$Vl},o($Vm,[2,39]),o($Vm,[2,56]),{24:[1,98],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},{25:99,35:$VD},{25:101,35:$VD},{8:[2,18]},{8:[2,11],39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,58:$VB,59:$VC},o($Vn,[2,12]),o($VE,[2,33],{41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o($VE,[2,34],{41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o($VF,[2,35],{43:$Vs}),o($VF,[2,36],{43:$Vs}),o($Vm,[2,37]),o($VF,[2,38],{43:$Vs}),o($VG,[2,47],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,53:$Vw,54:$Vx,55:$Vy,56:$Vz}),o($VG,[2,48],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,53:$Vw,54:$Vx,55:$Vy,56:$Vz}),o($VH,[2,49],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o($VH,[2,50],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o($VH,[2,51],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o($VH,[2,52],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt}),o([8,24,57,58],[2,53],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,59:$VC}),o([8,24,58],[2,54],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz,57:$VA,59:$VC}),o([8,24,57,58,59],[2,55],{39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,51:$Vu,52:$Vv,53:$Vw,54:$Vx,55:$Vy,56:$Vz}),o($Vm,[2,59]),o($V9,[2,15],{26:[1,102]}),o($V0,$V1,{6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,4:103,21:$V2,22:$V3,27:$V4,28:$V5,29:$V6,36:[1,104],37:$V7,38:$V8}),o($V9,[2,19]),{10:106,22:$V3,25:105,35:$VD},o($V0,$V1,{7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,6:20,21:$V2,22:$V3,27:$V4,28:$V5,29:$V6,36:[1,107],37:$V7,38:$V8}),o($VI,[2,28]),o($V9,[2,16]),o($V9,[2,17]),o($VI,[2,27])],
defaultActions: {19:[2,1],27:[2,22],28:[2,23],29:[2,24],30:[2,25],31:[2,26],80:[2,18]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    //codigo en JS
    //importaciones y declaraciones
    const {Declaracion} = require('../instrucciones/declaracion');
    const {If} = require('../instrucciones/if');
    const {Print} = require('../instrucciones/print');
    const {Literal} = require('../expresiones/literal')
    const {Type} = require('../symbols/type');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Identificador} = require('../expresiones/identificador');
    const {Relacional} = require('../expresiones/relacional');
    const {RelacionalOption} = require('../expresiones/relacionalOption');
    const {Logical} = require('../expresiones/logical');
    const {LogicalOption} = require('../expresiones/logicalOptions');
    const {Incremento} = require('../expresiones/incremento');
    const {IncrementOption} = require('../expresiones/incrementOptions');
    const {Decremento} = require('../expresiones/decremento');
    const {DecrementOption} = require('../expresiones/decrementOptions');

    var array_erroresLexicos;

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran espacios en blanco
break;
case 1:// comentario simple línea
break;
case 2:// comentario multiple líneas
break;
case 3:return 30;
break;
case 4:return 31;
break;
case 5:return 33;
break;
case 6:return 32;
break;
case 7:return 34;
break;
case 8:return 27;
break;
case 9:return 29;
break;
case 10:return 22;
break;
case 11:return 26;
break;
case 12:return 49;
break;
case 13:return 50;
break;
case 14:return 28;
break;
case 15:return 20;
break;
case 16:return 8;
break;
case 17:return 35;
break;
case 18:return 36;
break;
case 19:return 23;
break;
case 20:return 24;
break;
case 21:return 43;
break;
case 22:return 44;
break;
case 23:return 37;
break;
case 24:return 39;
break;
case 25:return 38;
break;
case 26:return 40;
break;
case 27:return 41;
break;
case 28:return 42;
break;
case 29:return 57;
break;
case 30:return 58;
break;
case 31:return 59;
break;
case 32:return 55;
break;
case 33:return 53;
break;
case 34:return 56;
break;
case 35:return 54;
break;
case 36:return 51;
break;
case 37:return 18;
break;
case 38:return 52;
break;
case 39:return 60;
break;
case 40: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 48; 
break;
case 41: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 47; 
break;
case 42:return 46;
break;
case 43:return 45;
break;
case 44:return 21;
break;
case 45:return 5;
break;
case 46: 
                        console.log('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                        
                    
break;
}
},
rules: [/^(?:\s+)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:boolean\b)/i,/^(?:string\b)/i,/^(?:print\b)/i,/^(?:const\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:while\b)/i,/^(?:,)/i,/^(?:;)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\*\*)/i,/^(?:%)/i,/^(?:\+\+)/i,/^(?:\+)/i,/^(?:--)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:\^)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:==)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:"[^\"]*")/i,/^(?:'[^']')/i,/^(?:[0-9]+(\.[0-9]+)\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z])[a-zA-Z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}